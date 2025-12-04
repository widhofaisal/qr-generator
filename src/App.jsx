import { useState, useEffect } from 'react'
import QRCodeGenerator from './components/QRCodeGenerator'
import Header from './components/Header'
import { Moon, Sun } from 'lucide-react'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <div className="min-h-screen transition-colors duration-200">
      <Header />
      
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-dark-card shadow-lg border border-gray-200 dark:border-dark-border hover:scale-110 transition-transform"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700" />
        )}
      </button>

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <QRCodeGenerator />
      </main>

      <footer className="text-center py-8 text-gray-600 dark:text-gray-400 text-sm">
        <p>Generate professional QR codes with customizable styles and export options</p>
      </footer>
    </div>
  )
}

export default App
