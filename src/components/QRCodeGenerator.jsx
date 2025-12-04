import { useState, useEffect, useRef } from 'react'
import QRCodeStyling from 'qr-code-styling'
import { jsPDF } from 'jspdf'
import { Download, Upload, X, AlertCircle, History, Palette } from 'lucide-react'
import ColorPicker from './ColorPicker'
import StyleSelector from './StyleSelector'
import PresetThemes from './PresetThemes'
import QRHistory from './QRHistory'

const QRCodeGenerator = () => {
  const [text, setText] = useState('https://example.com')
  const [qrCode, setQrCode] = useState(null)
  const [logo, setLogo] = useState(null)
  const [error, setError] = useState('')
  const [contrastWarning, setContrastWarning] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('qrHistory')
    return saved ? JSON.parse(saved) : []
  })

  const [options, setOptions] = useState({
    width: 300,
    height: 300,
    type: 'svg',
    data: 'https://example.com',
    margin: 10,
    qrOptions: {
      typeNumber: 0,
      mode: 'Byte',
      errorCorrectionLevel: 'M'
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 5,
      crossOrigin: 'anonymous'
    },
    dotsOptions: {
      color: '#000000',
      type: 'rounded'
    },
    backgroundOptions: {
      color: '#ffffff'
    },
    cornersSquareOptions: {
      color: '#000000',
      type: 'extra-rounded'
    },
    cornersDotOptions: {
      color: '#000000',
      type: 'dot'
    }
  })

  const qrRef = useRef(null)
  const fileInputRef = useRef(null)

  // Initialize QR Code
  useEffect(() => {
    const qr = new QRCodeStyling(options)
    setQrCode(qr)
    if (qrRef.current) {
      qrRef.current.innerHTML = ''
      qr.append(qrRef.current)
    }
  }, [])

  // Update QR Code when options change
  useEffect(() => {
    if (qrCode) {
      qrCode.update(options)
      checkContrast()
    }
  }, [options, qrCode])

  // Check color contrast
  const checkContrast = () => {
    const fgColor = options.dotsOptions.color
    const bgColor = options.backgroundOptions.color
    const contrast = getContrastRatio(fgColor, bgColor)
    setContrastWarning(contrast < 3)
  }

  const getContrastRatio = (color1, color2) => {
    const getLuminance = (color) => {
      const rgb = parseInt(color.slice(1), 16)
      const r = (rgb >> 16) & 0xff
      const g = (rgb >> 8) & 0xff
      const b = (rgb >> 0) & 0xff
      const [rs, gs, bs] = [r, g, b].map(c => {
        c = c / 255
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
      })
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
    }

    const l1 = getLuminance(color1)
    const l2 = getLuminance(color2)
    const lighter = Math.max(l1, l2)
    const darker = Math.min(l1, l2)
    return (lighter + 0.05) / (darker + 0.05)
  }

  const updateOptions = (key, value) => {
    setOptions(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const updateNestedOptions = (parent, key, value) => {
    setOptions(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [key]: value
      }
    }))
  }

  const handleTextChange = (e) => {
    const value = e.target.value
    setText(value)
    setError('')
    
    if (value.trim()) {
      updateOptions('data', value)
    } else {
      setError('Please enter text or URL to generate QR code')
    }
  }

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setError('Logo file size should be less than 2MB')
        return
      }

      const reader = new FileReader()
      reader.onload = (event) => {
        setLogo(event.target.result)
        updateOptions('image', event.target.result)
        // Increase error correction when logo is added
        updateNestedOptions('qrOptions', 'errorCorrectionLevel', 'H')
      }
      reader.readAsDataURL(file)
    }
  }

  const removeLogo = () => {
    setLogo(null)
    updateOptions('image', undefined)
    updateNestedOptions('qrOptions', 'errorCorrectionLevel', 'M')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const downloadQR = async (format) => {
    if (!text.trim()) {
      setError('Please enter text or URL before downloading')
      return
    }

    try {
      // Create high-resolution version for export (2048px for better quality)
      const exportSize = 2048
      const highResOptions = {
        ...options,
        width: exportSize,
        height: exportSize,
        type: format === 'svg' ? 'svg' : 'canvas'
      }

      if (format === 'pdf') {
        // Create high-res QR code for PDF
        const tempQR = new QRCodeStyling(highResOptions)
        const tempDiv = document.createElement('div')
        tempQR.append(tempDiv)
        await new Promise(resolve => setTimeout(resolve, 200))
        const tempCanvas = tempDiv.querySelector('canvas')
        
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        })
        const imgData = tempCanvas.toDataURL('image/png', 1.0)
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = pdf.internal.pageSize.getHeight()
        const size = Math.min(pdfWidth, pdfHeight) * 0.8
        const x = (pdfWidth - size) / 2
        const y = (pdfHeight - size) / 2
        
        pdf.addImage(imgData, 'PNG', x, y, size, size)
        pdf.save('qrcode.pdf')
        
        // Cleanup
        tempDiv.remove()
      } else if (format === 'svg') {
        // SVG is vector, use original QR code
        qrCode.download({ 
          name: 'qrcode', 
          extension: 'svg'
        })
      } else {
        // PNG and JPG - create high resolution version
        const tempQR = new QRCodeStyling(highResOptions)
        const tempDiv = document.createElement('div')
        tempQR.append(tempDiv)
        await new Promise(resolve => setTimeout(resolve, 200))
        
        const tempCanvas = tempDiv.querySelector('canvas')
        const link = document.createElement('a')
        link.download = `qrcode.${format}`
        
        // Use maximum quality for export
        const quality = format === 'jpg' ? 0.95 : 1.0
        const mimeType = format === 'jpg' ? 'image/jpeg' : 'image/png'
        link.href = tempCanvas.toDataURL(mimeType, quality)
        
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        
        // Cleanup
        tempDiv.remove()
      }

      // Save to history
      saveToHistory()
    } catch (err) {
      setError('Failed to download QR code. Please try again.')
      console.error(err)
    }
  }

  const saveToHistory = () => {
    const newEntry = {
      id: Date.now(),
      text,
      timestamp: new Date().toISOString(),
      options: { ...options },
      hasLogo: !!logo
    }

    const updatedHistory = [newEntry, ...history.slice(0, 9)] // Keep last 10
    setHistory(updatedHistory)
    localStorage.setItem('qrHistory', JSON.stringify(updatedHistory))
  }

  const loadFromHistory = (entry) => {
    setText(entry.text)
    setOptions(entry.options)
    setShowHistory(false)
  }

  const applyTheme = (theme) => {
    setOptions(prev => ({
      ...prev,
      dotsOptions: {
        ...prev.dotsOptions,
        color: theme.foreground,
        type: theme.dotsType || prev.dotsOptions.type
      },
      backgroundOptions: {
        color: theme.background
      },
      cornersSquareOptions: {
        ...prev.cornersSquareOptions,
        color: theme.foreground
      },
      cornersDotOptions: {
        ...prev.cornersDotOptions,
        color: theme.foreground
      }
    }))
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Left Panel - Controls */}
      <div className="space-y-6">
        {/* Input Section */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span>Content</span>
          </h2>
          
          <div>
            <label className="label">Enter URL or Text</label>
            <textarea
              value={text}
              onChange={handleTextChange}
              placeholder="https://example.com or any text"
              className="input min-h-[100px] resize-y"
              rows={4}
            />
          </div>

          {error && (
            <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-2 text-red-700 dark:text-red-400 text-sm">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {contrastWarning && (
            <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg flex items-start gap-2 text-yellow-700 dark:text-yellow-400 text-sm">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>Low contrast detected. QR code may be difficult to scan.</span>
            </div>
          )}
        </div>

        {/* Preset Themes */}
        <PresetThemes onApplyTheme={applyTheme} />

        {/* Customization Section */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Palette className="w-5 h-5" />
            <span>Customize</span>
          </h2>

          <div className="space-y-6">
            {/* Colors */}
            <div className="grid grid-cols-2 gap-4">
              <ColorPicker
                label="Foreground Color"
                color={options.dotsOptions.color}
                onChange={(color) => {
                  updateNestedOptions('dotsOptions', 'color', color)
                  updateNestedOptions('cornersSquareOptions', 'color', color)
                  updateNestedOptions('cornersDotOptions', 'color', color)
                }}
              />
              <ColorPicker
                label="Background Color"
                color={options.backgroundOptions.color}
                onChange={(color) => updateNestedOptions('backgroundOptions', 'color', color)}
              />
            </div>

            {/* Style Selector */}
            <StyleSelector
              value={options.dotsOptions.type}
              onChange={(type) => updateNestedOptions('dotsOptions', 'type', type)}
            />

            {/* Size */}
            <div>
              <label className="label">
                Size: {options.width}px
              </label>
              <input
                type="range"
                min="200"
                max="800"
                step="50"
                value={options.width}
                onChange={(e) => {
                  const size = parseInt(e.target.value)
                  updateOptions('width', size)
                  updateOptions('height', size)
                }}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            {/* Margin */}
            <div>
              <label className="label">
                Margin: {options.margin}px
              </label>
              <input
                type="range"
                min="0"
                max="50"
                step="5"
                value={options.margin}
                onChange={(e) => updateOptions('margin', parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            {/* Logo Upload */}
            <div>
              <label className="label">Logo (Optional)</label>
              <div className="flex gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                  id="logo-upload"
                />
                <label
                  htmlFor="logo-upload"
                  className="btn btn-secondary flex-1 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Upload className="w-4 h-4" />
                  {logo ? 'Change Logo' : 'Upload Logo'}
                </label>
                {logo && (
                  <button
                    onClick={removeLogo}
                    className="btn btn-secondary px-3"
                    title="Remove logo"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              {logo && (
                <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <img src={logo} alt="Logo preview" className="w-16 h-16 object-contain mx-auto" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* History Button */}
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="btn btn-secondary w-full flex items-center justify-center gap-2"
        >
          <History className="w-4 h-4" />
          {showHistory ? 'Hide History' : 'Show History'} ({history.length})
        </button>
      </div>

      {/* Right Panel - Preview & Export */}
      <div className="space-y-6">
        {/* Preview */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
          <div className="flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <div ref={qrRef} className="qr-code-container" />
          </div>
        </div>

        {/* Export Options */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Download className="w-5 h-5" />
            <span>Export</span>
          </h2>
          
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => downloadQR('png')}
              className="btn btn-primary"
              disabled={!text.trim()}
            >
              Download PNG
            </button>
            <button
              onClick={() => downloadQR('jpg')}
              className="btn btn-primary"
              disabled={!text.trim()}
            >
              Download JPG
            </button>
            <button
              onClick={() => downloadQR('svg')}
              className="btn btn-primary"
              disabled={!text.trim()}
            >
              Download SVG
            </button>
            <button
              onClick={() => downloadQR('pdf')}
              className="btn btn-primary"
              disabled={!text.trim()}
            >
              Download PDF
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
            High-resolution exports suitable for printing
          </p>
        </div>

        {/* History Panel */}
        {showHistory && (
          <QRHistory
            history={history}
            onLoad={loadFromHistory}
            onClear={() => {
              setHistory([])
              localStorage.removeItem('qrHistory')
            }}
          />
        )}
      </div>
    </div>
  )
}

export default QRCodeGenerator
