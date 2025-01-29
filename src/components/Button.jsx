import React from 'react'

const Button = ({ children, onClick }) => {
  return (
    <button
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline transform transition-all duration-150 ease-in-out hover:scale-105"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
