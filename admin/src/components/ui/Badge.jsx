import React from 'react'

const Badge = ({ text, color = 'bg-blue-500' }) => {
  return <span className={`px-2 py-1 text-xs rounded-full ${color} text-white`}>{text}</span>
}

export default Badge
