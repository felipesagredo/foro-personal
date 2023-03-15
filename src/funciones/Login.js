import React, { useState } from "react";

const Login = ({ handleLogin }) => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (event) => {
event.preventDefault();
handleLogin(username, password);
};

return (
<form onSubmit={handleSubmit}>
<label>
Username:
<input
type="text"
value={username}
onChange={(e) => setUsername(e.target.value)}
/>
</label>
<label>
Password:
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
</label>
<button type="submit">Log in</button>
</form>
);
};

export default Login;