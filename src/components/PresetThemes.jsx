import { Sparkles } from 'lucide-react'

const themes = [
  { name: 'Classic', foreground: '#000000', background: '#ffffff' },
  { name: 'Ocean', foreground: '#0077be', background: '#e6f3ff' },
  { name: 'Forest', foreground: '#2d5016', background: '#e8f5e9' },
  { name: 'Sunset', foreground: '#d84315', background: '#fff3e0' },
  { name: 'Purple', foreground: '#6a1b9a', background: '#f3e5f5' },
  { name: 'Dark', foreground: '#ffffff', background: '#1a1a1a' },
  { name: 'Neon', foreground: '#00ff00', background: '#000000' },
  { name: 'Rose', foreground: '#c2185b', background: '#fce4ec' },
  { name: 'Cherry', foreground: '#c62828', background: '#ffebee' },
  { name: 'Ruby', foreground: '#b71c1c', background: '#ffffff' },
  { name: 'Crimson', foreground: '#d32f2f', background: '#fce4ec' },
  { name: 'Wine', foreground: '#880e4f', background: '#f8bbd0' },
  { name: 'Fire', foreground: '#e53935', background: '#fff9c4' },
  { name: 'Blood', foreground: '#8b0000', background: '#ffcccc' },
  { name: 'Scarlet', foreground: '#ff1744', background: '#ffffff' },
  { name: 'Burgundy', foreground: '#6d1b2b', background: '#f3e5f5' }
]

export default function PresetThemes({ onApplyTheme }) {
  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5" />
        <span>Preset Themes</span>
      </h2>
      
      <div className="grid grid-cols-4 gap-2">
        {themes.map((theme) => (
          <button
            key={theme.name}
            onClick={() => onApplyTheme(theme)}
            className="group relative aspect-square rounded-lg overflow-hidden border-2 border-gray-200 dark:border-dark-border hover:border-blue-500 transition-all"
            style={{ backgroundColor: theme.background }}
            title={theme.name}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-8 h-8 rounded"
                style={{ backgroundColor: theme.foreground }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity text-center">
              {theme.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
