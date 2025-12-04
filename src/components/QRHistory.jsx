import { Clock, Trash2, Download } from 'lucide-react'

export default function QRHistory({ history, onLoad, onClear }) {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffMs = now - date
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`
    return date.toLocaleDateString()
  }

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <span>History</span>
        </h2>
        {history.length > 0 && (
          <button
            onClick={onClear}
            className="text-sm text-red-600 dark:text-red-400 hover:underline flex items-center gap-1"
          >
            <Trash2 className="w-3 h-3" />
            Clear All
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center py-8">
          No history yet. Generate some QR codes!
        </p>
      ) : (
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {history.map((entry) => (
            <button
              key={entry.id}
              onClick={() => onLoad(entry)}
              className="w-full p-3 rounded-lg border border-gray-200 dark:border-dark-border hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left group"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {entry.text}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {formatDate(entry.timestamp)}
                    {entry.hasLogo && ' • With logo'}
                  </p>
                </div>
                <Download className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0" />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
