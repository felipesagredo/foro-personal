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
if (username === "exampleuser" && password === "password") {
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
  <>
    <Navbar user={user} />
    <Feed stories={stories} />
    <Profile user={user} stories={stories} />
    <Search stories={stories} />
    <CreateStory onCreateStory={handleCreateStory} />
  </>
  ) : (
  <>
    <Login handleLogin={handleLogin} />
    <Register handleRegister={handleRegister} />
  </>
  )}
</div>
);
};

export default App;