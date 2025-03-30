function ProgramCard({ program, onDelete, onToggleComplete }) {
  return (
    <div className={`program-card ${program.completed ? 'completed' : ''}`}>
      <h3>{program.title}</h3>
      <p>Status: {program.completed ? '✅ Completed' : '🕓 Incomplete'}</p>
      <button onClick={() => onToggleComplete(program.id)}>
        Toggle Complete
      </button>
      <button className="delete-btn" onClick={() => onDelete(program.id)}>
        Delete
      </button>
    </div>
  )
}

export default ProgramCard