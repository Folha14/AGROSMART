import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { login } from '../services/auth';

const LoginPage: React.FC = () => {
    const history = useHistory();

    const handleLogin = async (username: string, password: string) => {
        try {
            await login(username, password);
            history.push('/dashboard'); // Redirect to the dashboard after successful login
        } catch (error) {
            console.error("Login failed:", error);
            // Handle login error (e.g., show a message to the user)
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <LoginForm onLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;