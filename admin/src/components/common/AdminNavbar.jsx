import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-gray-700 bg-dark-200 px-6 py-4">
      <Link to="/" className="text-lg font-bold text-white">
        Admin Panel
      </Link>
      <div className="space-x-4">
        <Link to="/dashboard" className="text-gray-400 hover:text-white">
          Dashboard
        </Link>
        <Link to="/projects" className="text-gray-400 hover:text-white">
          Projects
        </Link>
      </div>
    </nav>
  )
}

export default AdminNavbar
