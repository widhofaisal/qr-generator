import { Square, Circle, Hexagon, Grid3x3 } from 'lucide-react'

const styles = [
  { value: 'rounded', label: 'Rounded', icon: Circle },
  { value: 'dots', label: 'Dots', icon: Circle },
  { value: 'classy', label: 'Classy', icon: Hexagon },
  { value: 'classy-rounded', label: 'Classy Rounded', icon: Hexagon },
  { value: 'square', label: 'Square', icon: Square },
  { value: 'extra-rounded', label: 'Extra Rounded', icon: Circle }
]

export default function StyleSelector({ value, onChange }) {
  return (
    <div>
      <label className="label">QR Code Style</label>
      <div className="grid grid-cols-3 gap-2">
        {styles.map((style) => {
          const Icon = style.icon
          return (
            <button
              key={style.value}
              onClick={() => onChange(style.value)}
              className={`p-3 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
                value === style.value
                  ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-200 dark:border-dark-border hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{style.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
