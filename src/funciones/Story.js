import React from 'react';
import '../estilos/Story.css';

function Story(props) {

  return (
    <div className='story_contenedor_0'>
      <div className='story_contenedor_1'>
        <img src={props.imageUrl} alt={props.description} />
        <h3>@{props.user}</h3>
        <h3>{props.description}</h3>
        <p>Publicacion para: {props.privacy}</p>

        <button onClick={props.onAddComment}>Agregar comentario</button>
        <button onClick={props.onAddReaction}>Agregar reacción</button>
      </div>
    </div>
  );
}

export default Story;