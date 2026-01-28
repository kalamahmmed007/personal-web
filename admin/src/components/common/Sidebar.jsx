import React from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Folder, Users, MessageSquare, Settings } from 'lucide-react'

const Sidebar = () => {
  const links = [
    { name: 'Dashboard', icon: LayoutDashboard, to: '/dashboard' },
    { name: 'Projects', icon: Folder, to: '/projects' },
    { name: 'Skills', icon: Users, to: '/skills' },
    { name: 'Messages', icon: MessageSquare, to: '/messages' },
    { name: 'Settings', icon: Settings, to: '/settings' },
  ]

  return (
    <aside className="min-h-screen w-64 border-r border-gray-700 bg-dark-200 p-4">
      <ul className="space-y-2">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <li key={link.name}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded hover:bg-blue-500/20 ${
                    isActive ? 'bg-blue-500/20 text-white' : 'text-gray-400'
                  }`
                }
              >
                <Icon size={18} />
                {link.name}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
