import React from 'react';
import '../estilos/EstiloPerfil.css';

function Story(props) {

  return (
    <div className='story_contenedor_1'>

      <p>Nombre de usuario: {props.user}</p>
      <p>Titulo Publicacion: {props.title}</p>
      <p>Descripcion: {props.description}</p>
      <p>Privacidad: {props.privacy}</p>
      <p>Aqui una imagen: </p>
      <img src={props.imageUrl} alt={props.description} />

      <button onClick={props.onAddComment}>Agregar comentario</button>
      <button onClick={props.onAddReaction}>Agregar reacción</button>

    </div>
  );
}

export default Story;