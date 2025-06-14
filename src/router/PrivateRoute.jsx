import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../utils/useAuth'

function PrivateRoute() {
    const token = useAuth()
    return token ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
