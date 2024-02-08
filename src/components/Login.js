import {GoogleLogin, useGoogleLogin} from '@react-oauth/google';
import useAuth from '../data/useAuth';
import {Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {loginA} = useAuth();
    const navigator = useNavigate();
    const login = useGoogleLogin({
        onSuccess: async codeResponse => {
            await loginA(codeResponse);
            navigator('/');
        },
        flow: 'auth-code',
    });

    return (
        <div>
            <Button onClick={() => login()}>Login with google</Button>
        </div>
    );
};

export default Login;