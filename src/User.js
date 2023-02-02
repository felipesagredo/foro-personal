import React, { useState } from 'react';
import './User.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar las credenciales del usuario a tu servidor para autenticar
    console.log(`Username: ${username} Password: ${password}`);
  };

  return (
    <div className='caja-user'>
        <div className='form-user'>
            <form onSubmit={handleSubmit}>
                <label>
                    Usuario:
                    <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    />
                </label>
                <br />
                <label>
                    Contraseña:
                    <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    </div>
    
  );
}

export default LoginForm;