import React, { useState } from 'react'
import Button from '../../components/common/Button'

const AddProject = () => {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Add project:', name)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-dark-300 p-6">
      <h2 className="text-xl font-bold text-white">Add Project</h2>
      <input
        type="text"
        placeholder="Project Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded bg-dark-100 px-4 py-3 text-white"
      />
      <Button type="submit">Save Project</Button>
    </form>
  )
}

export default AddProject
