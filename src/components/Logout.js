import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../data/useAuth';

const Logout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        navigate('/login');
    }, [logout, navigate]);

    return null;
};

export default Logout;