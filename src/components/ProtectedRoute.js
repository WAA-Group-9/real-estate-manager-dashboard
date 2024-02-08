import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from "../data/useAuth";

const PrivateRoutes = () => {
    const user_type = localStorage.getItem('user_type');
    return (
        user_type ? <Outlet/> : <Navigate to='/login'/>
    );
};

export default PrivateRoutes;