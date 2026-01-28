import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import ProtectedRoute from './ProtectedRoute'

import Login from '../pages/auth/Login'
import Dashboard from '../pages/dashboard/Dashboard'
import ProjectsList from '../pages/projects/ProjectsList'
import Messages from '../pages/messages/Messages'

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="projects" element={<ProjectsList />} />
        <Route path="messages" element={<Messages />} />
      </Route>

      <Route path="*" element={<Navigate to="/admin" />} />
    </Routes>
  )
}

export default AdminRoutes
