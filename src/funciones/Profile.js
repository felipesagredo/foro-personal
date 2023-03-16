import React from 'react';
import Feed from './Feed';
import '../estilos/EstiloPerfil.css';

function Profile(props) {
  return (
    <div className='perfil_contenedor_0'>
      <div className="perfil_contenedor">
        <img src={props.imageUrl} alt={props.name} />
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <p>{props.followers} seguidores</p>
        <p>{props.following} seguidos</p>
        <Feed stories={props.stories} />
      </div>
    </div>
  );
}

export default Profile;
