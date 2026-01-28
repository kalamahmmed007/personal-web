import React from 'react'
import { LayoutDashboard } from 'lucide-react'
import StatCard from '../../components/ui/StatCard'

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatCard icon={LayoutDashboard} label="Projects" value={50} />
        <StatCard icon={LayoutDashboard} label="Clients" value={30} />
        <StatCard icon={LayoutDashboard} label="Messages" value={12} />
      </div>
    </div>
  )
}

export default Dashboard
