export default function ColorPicker({ label, color, onChange }) {
  return (
    <div>
      <label className="label">{label}</label>
      <div className="flex gap-2">
        <input
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="w-12 h-10 rounded cursor-pointer border border-gray-300 dark:border-dark-border"
        />
        <input
          type="text"
          value={color}
          onChange={(e) => {
            const value = e.target.value
            if (/^#[0-9A-Fa-f]{0,6}$/.test(value)) {
              onChange(value)
            }
          }}
          className="input flex-1 font-mono text-sm"
          placeholder="#000000"
          maxLength={7}
        />
      </div>
    </div>
  )
}
