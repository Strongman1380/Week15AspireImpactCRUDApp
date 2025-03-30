import { useState } from 'react'
import Sidebar from './Sidebar'
import ProgramList from './ProgramList'

const TEST_DATA = [
  { id: 1, title: 'React Basics', completed: false },
  { id: 2, title: 'Advanced React', completed: true },
  { id: 3, title: 'React + Vite', completed: false }
]

function App() {
  console.log("🔥 App.jsx is rendering...")

  const [programs, setPrograms] = useState(TEST_DATA)

  const handleAdd = (title) => {
    const newProgram = {
      id: Date.now(),
      title,
      completed: false
    }
    setPrograms(prev => [...prev, newProgram])
  }

  const handleDelete = (id) => {
    setPrograms(prev => prev.filter(p => p.id !== id))
  }

  const handleToggleComplete = (id) => {
    setPrograms(prev =>
      prev.map(p =>
        p.id === id ? { ...p, completed: !p.completed } : p
      )
    )
  }

  return (
    <div className="app">
      <Sidebar onAdd={handleAdd} />
      <ProgramList
        data={programs}
        onDelete={handleDelete}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  )
}

export default App