import React from 'react';
import '../estilos/EstiloPerfil.css';

function Story(props) {
  return (
    <div className='story_contenedor_1'>
      <p>Aqui una imagen: </p>
      <img src={props.imageUrl} alt={props.description} />
      <p>Descripcion: {props.description}</p>
      <button onClick={props.onAddComment}>Agregar comentario</button>
      <button onClick={props.onAddReaction}>Agregar reacción</button>
    </div>
  );
}

export default Story;
