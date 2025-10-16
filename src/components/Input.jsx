export default function Input({ label, error, className = "", ...props }) {
  return (
    <label className={`input-block ${className}`}>
      {label && <span className="label">{label}</span>}
      <input className="input" {...props} />
      {error && <span className="error">{error}</span>}
    </label>
  )
}
