import '../estilos/Header.css';
import React, { useState } from "react";
import Navbar from "./Navbar";
import Feed from "./Feed";
import Profile from "./Profile";
import Search from "./Search";
import CreateStory from "./CreateStory";
import Login from "./Login";
import Register from "./Register";

const App = () => {
const [loggedIn, setLoggedIn] = useState(false);
const [user, setUser] = useState(null);
const [stories, setStories] = useState([]);

const handleLogin = (username, password) => {
// check username and password
if (username === "fsdts" && password === "password") {
  setLoggedIn(true);
  setUser(username);
} else {
  alert("Invalid username or password!");
}
};

const handleRegister = (username, password) => {
// create new user with username and password
setUser(username);
setLoggedIn(true);
};

const handleCreateStory = (newStory) => {
// add new story to stories array
setStories([...stories, newStory]);
};

return (
<div>
  {loggedIn ? (
  <div className='app_contenedor_main'>
    <Navbar usuario={stories} />
    <CreateStory onCreateStory={handleCreateStory} />
    <Search user={user} stories={stories} />
    <Profile user={user} stories={stories} />
    <Feed user={user} stories={stories} />
  </div>
  ) : (
  <div className='app_contenedor_login_register'>
    <Login handleLogin={handleLogin} />
    <Register handleRegister={handleRegister} />
  </div>
  )}
</div>
);
};

export default App;