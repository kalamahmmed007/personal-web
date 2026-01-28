import React from 'react'
import { Link } from 'react-router-dom'
import Table from '../../components/ui/Table'

const ProjectsList = () => {
  const data = [
    { id: 1, name: 'Project One', status: 'Active' },
    { id: 2, name: 'Project Two', status: 'Inactive' }
  ]
  const columns = ['ID', 'Name', 'Status', 'Actions']

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Projects</h2>
        <Link to="/projects/add" className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Add Project
        </Link>
      </div>
      <Table data={data} columns={columns} />
    </div>
  )
}

export default ProjectsList
