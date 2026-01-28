import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../store/slices/authSlice'
import Button from '../../components/common/Button'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({ email })) // simple mock login
    navigate('/')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-dark-200">
      <form
        onSubmit={handleSubmit}
        className="w-96 space-y-6 rounded-lg bg-dark-300 p-8"
      >
        <h2 className="text-center text-2xl font-bold text-white">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded bg-dark-100 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded bg-dark-100 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  )
}

export default Login
