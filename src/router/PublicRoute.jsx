import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../utils/useAuth'

function PublicRoute() {
    const token = useAuth()
    return token ? <Navigate to='/dashboard' /> : <Outlet />
}

export default PublicRoute