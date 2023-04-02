import React, { useState } from "react";
import '../estilos/Register.css';


const Register = ({ handleRegister }) => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
        handleRegister(username, password);
    } else {
        alert("Passwords do not match!");
    }
};

return (
<div className="register-contenedor-0">
    <h2>Registrate Aquí</h2>
    
<form className="register-contenedor-1" onSubmit={handleSubmit}>
    <label>
        Nuevo Usuario:
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

    <label>
        Confirmar Contraseña:
        <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
    </label>
<button type="submit">Registrar</button>
</form>
</div>
);
};

export default Register;