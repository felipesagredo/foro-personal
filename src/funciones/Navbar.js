import React from 'react';

function Navbar(props) {
  return (
    <nav className='navbar_contenedor_1'>
      <ul>
        <h1>{props.user}</h1>
        <li>Inicio</li>
        <li>Explorar</li>
        <li>Perfil</li>
      </ul>
      <button onClick={props.onCreateNewStory}>Nuevas Historias</button>
    </nav>
  );
}

export default Navbar;
