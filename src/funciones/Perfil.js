import '../estilos/Perfil.css';
import React from 'react';
import Feed from './Feed';

function Profile(props) {
  return (
    <div className='perfil_contenedor_0'>
      <div className="perfil_contenedor_1">
      <p>Modulo del Perfil</p>
        <h1>{props.user}</h1>
        
        <p>Seguidores: [ {props.followers}]</p>
        <p>Seguidos: [ {props.following}]</p>
        <Feed user={props.user} stories={props.stories} />
      </div>
    </div>
  );
}

export default Profile;
