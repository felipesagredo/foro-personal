import React, { useState } from "react";
import '../estilos/App.css';

const Login = ({ handleLogin }) => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(username, password);
};

return (
    <div className="login-contenedor-0">
        <form className="login-contenedor-1" onSubmit={handleSubmit}>
            <h2>Inicia Sesión</h2>
            <label>
                Usuario:
                <input 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
                Contraseña:
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button type="submit">Inicia Sesión</button>
        </form>
    </div>
        );
};

export default Login;