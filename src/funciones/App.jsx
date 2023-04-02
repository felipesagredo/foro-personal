import '../estilos/App.css';
import React, { useState } from "react";
import Navbar from "./Navbar";
import Feed from "./Feed";
import Perfil from "./Perfil";
import Search from "./Search";
import CreateStory from "./CreateStory";
import Login from "./Login";
import Register from "./Register";

const App = () => {
const [loggedIn, setLoggedIn] = useState(false);
const [user, setUser] = useState(null);
const [stories, setStories] = useState([]);
const [seguidos, setSeguidos] = useState([]);

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

const sumarSeguidores = (newSeguidos) => {
 setSeguidos([...seguidos, newSeguidos + 1]);
};



return (
<div>
  {loggedIn ? (
    <div className='app_contenedor_main_0'>
      <div className='app_contenedor_main_1'>
        <Navbar/>
        <Search user={user} stories={stories} />
        <CreateStory onCreateStory={handleCreateStory} />
        <Feed user={user} stories={stories} />
      </div>
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