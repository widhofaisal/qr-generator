import { QrCode } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white dark:bg-dark-card border-b border-gray-200 dark:border-dark-border shadow-sm">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <QrCode className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              QR Code Generator
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Create professional, customizable QR codes instantly
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
