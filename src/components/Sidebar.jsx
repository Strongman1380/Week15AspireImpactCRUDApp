function Sidebar({ onAdd }) {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <button className="add-btn" onClick={onAdd}>
        Add Program
      </button>
    </div>
  )
}

export default Sidebar