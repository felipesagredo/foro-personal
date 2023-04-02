import React from 'react';
import '../estilos/Story.css';

function Story(props) {

  return (
    <div className='story_contenedor_0'>
      <div className='story_contenedor_1'>

        <img src={props.imageUrl} alt={props.description} />
        <p>Nombre de usuario: {props.user}</p>
        <p>Titulo Publicacion: {props.title}</p>
        <p>Descripcion: {props.description}</p>
        <p>Privacidad: {props.privacy}</p>

        <button onClick={props.onAddComment}>Agregar comentario</button>
        <button onClick={props.onAddReaction}>Agregar reacción</button>
      </div>
    </div>
  );
}

export default Story;