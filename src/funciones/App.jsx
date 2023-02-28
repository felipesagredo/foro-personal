import '../estilos/Header.css';
import React from 'react';

function App() {
  return (
    <nav className='contenedor'>
      <ul className='menu'>
        <li><a href="/">Inicio</a></li>
        <li><input className='buscadorMain' placeholder='Buscar'></input></li>
        <li><a href="/">Perfil</a></li>
      </ul>
    </nav>
  );
}

export default App;

