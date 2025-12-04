# QR Code Generator

A modern, fully-featured web application for generating customizable QR codes with live preview and multiple export options.

## Features

### Core Functionality
- ✅ **Live Preview** - Instant QR code generation as you type
- ✅ **URL & Text Support** - Generate QR codes from any URL or text
- ✅ **Input Validation** - Prevents empty QR code generation

### Customization Options
- 🎨 **Color Customization** - Change foreground and background colors
- 🔲 **Multiple Styles** - Square, rounded, dots, circles, classy, and more
- 📏 **Adjustable Size** - 200px to 800px resolution
- 📐 **Margin Control** - Adjust spacing around QR code
- 🖼️ **Logo Upload** - Add custom logo in center with automatic error correction
- ⚠️ **Contrast Warning** - Automatic alerts for low contrast combinations

### Export Options
- 📥 **PNG Export** - High-resolution (2048x2048px) raster format
- 📥 **JPG Export** - High-resolution compressed format (95% quality)
- 📥 **SVG Export** - Scalable vector format (infinite resolution)
- 📥 **PDF Export** - Print-ready document format (2048px embedded)
- 🎨 **Professional Quality** - All exports at 2048px for crisp printing and zooming

### Additional Features
- 🌙 **Dark Mode** - Full dark theme support with system preference detection
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎨 **Preset Themes** - 16 beautiful color themes including 8 red variants (Cherry, Ruby, Crimson, Wine, Fire, Blood, Scarlet, Burgundy)
- 📜 **History** - Saves last 10 generated QR codes with localStorage
- ⚡ **Fast & Lightweight** - Fully browser-based, no backend required
- 🔒 **Privacy First** - All processing happens locally in your browser
- 📴 **Offline Support** - Works without internet after initial load

## Installation

### Option 1: Docker (Recommended)

**Easiest way to run the application:**

```bash
# Start with Docker Compose
docker-compose up -d

# Access at http://localhost:3000
```

See [DOCKER.md](DOCKER.md) for complete Docker documentation.

### Option 2: Node.js

1. **Clone or download this repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Option 3: Standalone (No Installation)

Simply open `standalone/qr-generator.html` in your browser - no installation required!

## Usage

1. **Enter Content**: Type or paste any URL or text in the input field
2. **Customize**: Choose colors, styles, size, and margin
3. **Add Logo** (Optional): Upload a logo to place in the center
4. **Apply Theme** (Optional): Select from preset color themes
5. **Export**: Download in your preferred format (PNG, JPG, SVG, or PDF)

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **qr-code-styling** - QR code generation library
- **jsPDF** - PDF export functionality
- **Lucide React** - Modern icon library

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Features Breakdown

### Error Correction
The app automatically adjusts QR code error correction levels:
- **Medium (M)** - Default, 15% error correction
- **High (H)** - When logo is added, 30% error correction

This ensures QR codes remain scannable even with a logo overlay.

### Contrast Detection
The app calculates color contrast ratios and warns you if the combination may be difficult to scan. Minimum recommended contrast ratio is 3:1.

### History Management
- Stores last 10 QR codes in browser localStorage
- Includes timestamp and configuration
- Quick reload of previous QR codes
- Clear all history option

## File Structure

```
qrcode-generator/
├── public/
│   └── qr-icon.svg
├── src/
│   ├── components/
│   │   ├── ColorPicker.jsx
│   │   ├── Header.jsx
│   │   ├── PresetThemes.jsx
│   │   ├── QRCodeGenerator.jsx
│   │   ├── QRHistory.jsx
│   │   └── StyleSelector.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Customization

### Adding New Themes
Edit `src/components/PresetThemes.jsx` and add to the themes array:

```javascript
{ name: 'Your Theme', foreground: '#000000', background: '#ffffff' }
```

### Adding New Styles
Edit `src/components/StyleSelector.jsx` and add to the styles array.

### Changing Default Settings
Edit the initial `options` state in `src/components/QRCodeGenerator.jsx`.

## Performance

- Initial load: < 500KB (gzipped)
- QR generation: < 50ms
- Fully client-side processing
- No external API calls
- Works offline after first load

## License

MIT License - Feel free to use this project for personal or commercial purposes.

## Support

For issues or questions, please open an issue on the repository.

## Roadmap

Potential future enhancements:
- [ ] Batch QR code generation
- [ ] User accounts with cloud sync
- [ ] More export formats (WebP, TIFF)
- [ ] QR code templates
- [ ] Advanced analytics tracking
- [ ] QR code scanning feature
- [ ] API integration options

---

Made with ❤️ using React and modern web technologies
