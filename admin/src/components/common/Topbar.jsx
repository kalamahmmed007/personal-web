import { useDispatch } from 'react-redux'
import { logout } from '../../store/slices/authSlice'

const Topbar = () => {
  const dispatch = useDispatch()

  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-4">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <button
        onClick={() => dispatch(logout())}
        className="rounded bg-red-500 px-4 py-2 text-sm text-white"
      >
        Logout
      </button>
    </header>
  )
}

export default Topbar
