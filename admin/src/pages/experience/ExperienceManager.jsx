import React from 'react'
import Table from '../../components/ui/Table'

const SkillsList = () => {
  const skills = [
    { id: 1, name: 'React', level: 'Expert' },
    { id: 2, name: 'Node.js', level: 'Advanced' }
  ]
  const columns = ['ID', 'Skill', 'Level', 'Actions']

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-white">Skills</h2>
      <Table data={skills} columns={columns} />
    </div>
  )
}

export default SkillsList
