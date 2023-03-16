import React from 'react';

function Navbar(props) {
  return (
    <nav className='navbar_contenedor_1'>
      <ul>
        <li>Inicio</li>
        <li>Explorar</li>
        <li>Perfil</li>
      </ul>
      <button onClick={props.onCreateNewStory}>Nueva Historia</button>
    </nav>
  );
}

export default Navbar;
