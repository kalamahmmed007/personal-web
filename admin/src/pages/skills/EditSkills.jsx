import React, { useState, useEffect } from 'react'
import Button from '../../components/common/Button'
import { useParams } from 'react-router-dom'

const EditProject = () => {
  const { id } = useParams()
  const [name, setName] = useState('')

  useEffect(() => {
    // Fetch project by id (mock)
    setName(`Project ${id}`)
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Update project:', id, name)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-dark-300 p-6">
      <h2 className="text-xl font-bold text-white">Edit Project</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded bg-dark-100 px-4 py-3 text-white"
      />
      <Button type="submit">Update Project</Button>
    </form>
  )
}

export default EditProject
