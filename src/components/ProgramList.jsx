import ProgramCard from './ProgramCard'

function ProgramList({ data, onDelete, onToggleComplete }) {
  return (
    <div className="program-list">
      {data.map(program => (
        <ProgramCard
          key={program.id}
          program={program}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  )
}

export default ProgramList