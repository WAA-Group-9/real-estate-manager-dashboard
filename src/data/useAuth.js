import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [logged, setLogged] = useState(false);
    const [loading, setLoading] = useState(true);

    const loginA = async (googleUser) => {
        try {
            console.log("google user",googleUser)
            const authorizationCode = googleUser.code;
            console.log("authorization code",authorizationCode)
            const response = await axios.post('http://localhost:8080/api/v1/user/auth/token', { authorizationCode });
            setUser(response.data.user); // Assuming the user's role is included in the response
            localStorage.setItem('access_token',response.data.authorization.access_token);
            localStorage.setItem('id_token',response.data.authorization.id_token);
            localStorage.setItem('refresh_token', response.data.authorization.refresh_token);
            localStorage.setItem('user_type', response.data.user.userType);
            localStorage.setItem('user_email', response.data.user.email);
            return Promise.resolve();
        } catch (error) {
            console.error(error);
            return Promise.reject();
        }
    };

    const logout = () => {
        setUser(null);
        setLogged(false);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user_type');
        localStorage.removeItem('user_email');
    };


    return { user, loginA, logout, logged, loading };
};

export default useAuth;