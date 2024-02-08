import { GoogleLogin } from '@react-oauth/google';
import useAuth from '../data/useAuth';

const Login = () => {
    const { login } = useAuth();

    const responseGoogle = (response) => {
        const googleUser = response; // This should be an instance of GoogleUser
        login(googleUser);
    }

    return (
        <div>
            <GoogleLogin
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
            {/* rest of your login form */}
        </div>
    );
};

export default Login;