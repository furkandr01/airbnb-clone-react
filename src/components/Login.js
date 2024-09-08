import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const storedUser = users.find(user => user.email === email && user.password === password);

        if (storedUser) {
            onLogin(storedUser); 
            navigate("/");
        } else {
            alert("Geçersiz giriş bilgileri");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <input name="email" type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required />
            <input name="password" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default Login;
