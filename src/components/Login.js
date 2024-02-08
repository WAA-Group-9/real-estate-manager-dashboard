import { GoogleLogin } from '@react-oauth/google';
import useAuth from '../data/useAuth';

const Login = () => {
    const { login } = useAuth();

    const responseGoogle = (response) => {
        //console.log(response)
        const googleUser = response;
        login(googleUser);
    }

    return (
        <div>
            <GoogleLogin
                buttonText="Login"
                responseType="code"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
            {/* rest of your login form */}
        </div>
    );
};

export default Login;