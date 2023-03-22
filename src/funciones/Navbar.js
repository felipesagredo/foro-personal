import React from 'react';

function Navbar(props) {
  return (
    <div className='navbar_contenedor_0'>
    <nav className='navbar_contenedor_1'>
      <ul>
        <li>Inicio</li>
        <li>Explorar</li>
        <li>Perfil</li>
      </ul>
      <button onClick={props.onCreateNewStory}>Nuevas Historias</button>
    </nav>
    </div>
  );
}

export default Navbar;
