import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [logged, setLogged] = useState(false);

    const login = async (googleUser) => {
        try {
            console.log("google user",googleUser)
            const authorizationCode = googleUser.credential;
            const response = await axios.post('http://localhost:8080/api/v1/user/auth/token', { authorizationCode });
            setUser(response.data.user); // Assuming the user's role is included in the response
            localStorage.setItem('token',authorizationCode);
            console.log("response",response.data)
            console.log("id token", authorizationCode);
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