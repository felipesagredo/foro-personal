import React from 'react';

function Story(props) {
  return (
    <div>
      <img src={props.imageUrl} alt={props.description} />
      <p>{props.description}</p>
      <button onClick={props.onAddComment}>Agregar comentario</button>
      <button onClick={props.onAddReaction}>Agregar reacción</button>
    </div>
  );
}

export default Story;
