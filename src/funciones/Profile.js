import React from 'react';
import Feed from './Feed';
import '../estilos/EstiloPerfil.css';

function Profile(props) {
  return (
    <div className='perfil_contenedor_0'>
      <div className="perfil_contenedor">
        <img src={props.imageUrl} alt={props.name} />
        <h1>Usuario: {props.name}</h1>
        <p>Aqui una Descripcion: {props.description}</p>
        <p>Aqui van: [{props.followers}] seguidores</p>
        <p>Aqui hay: [{props.following}] seguidos</p>
        <Feed stories={props.stories} />
      </div>
    </div>
  );
}

export default Profile;
