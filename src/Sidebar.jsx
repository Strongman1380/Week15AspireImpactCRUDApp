import { useState } from 'react'

function Sidebar({ onAdd }) {
  const [title, setTitle] = useState("")

  const handleSubmit = () => {
    if (!title.trim()) return
    onAdd(title.trim())
    setTitle("")
  }

  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <input
        className="input-field"
        type="text"
        placeholder="Program name..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="add-btn" onClick={handleSubmit}>
        Add Program
      </button>
    </div>
  )
}

export default Sidebar