import { Outlet } from 'react-router-dom'
import Sidebar from '../components/common/Sidebar'
import Topbar from '../components/common/Topbar'

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Topbar />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
