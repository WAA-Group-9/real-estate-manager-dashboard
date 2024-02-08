import { Navigate, Outlet } from 'react-router-dom'
import useAuth from "../data/useAuth";
const PrivateRoutes = () => {
    //TODO: needs to fixed
    const token = false && localStorage.getItem('token')
    return (
        token ? <Outlet/> : <Navigate to='/login'/>
    )
}
export default PrivateRoutes;