import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [logged, setLogged] = useState(false);

    const login = async (googleUser) => {
        try {
            const id_token = googleUser.credential;
            //const response = await axios.post('/auth/google', { id_token });
            //setUser(response.data.user); // Assuming the user's role is included in the response
            localStorage.setItem('token',id_token);
            setLogged(true);
            console.log(logged);
            //localStorage.setItem('refresh_token', response.data.refresh_token);
        } catch (error) {
            console.error(error);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    };

    // Load user from local storage
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setLogged(true);
        }
    }, []);

    return { user, login, logout, logged };
};

export default useAuth;