import React, { useState } from "react";
import '../estilos/Login.css';

const Login = ({ handleLogin }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin(username, password);
    };

    return (
        <div className="login-contenedor-0">
            <h2>Inicia Sesión</h2>
            <form className="login-contenedor-1" onSubmit={handleSubmit}>
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