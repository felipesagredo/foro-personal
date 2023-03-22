import '../estilos/EstiloPerfil.css';
import React from 'react';
import Feed from './Feed';

function Profile(props) {
  return (
    <div className='perfil_contenedor_0'>
      <div className="perfil_contenedor_1">
        <h1>Usuario: {props.user}</h1>
        <p>Biografia: {props.description}</p>
        <p>Cantidad de seguidores: [ {props.followers}]</p>
        <p>Cantidad de seguidos: [ {props.following}]</p>
        <Feed user={props.user} stories={props.stories} />
      </div>
    </div>
  );
}

export default Profile;
