import React from 'react'
import Button from './components/Button'

function App() {
  const handleClick = () => {
    alert('Button clicked!')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Button onClick={handleClick}>Click me</Button>
    </div>
  )
}

export default App
