import React from 'react';
import '../estilos/EstiloPerfil.css';

function Feed(props) {
  const stories = props.stories.map(story => (
    <div key={story.id}>
      <img src={story.imageUrl} alt={story.description} />
      <p>{story.description}</p>
    </div>
  ));

  return (
    <div className='feed_contenedor_1'>
      {stories}
      <button onClick={props.onLoadMore}>Ver más historias</button>
    </div>
  );
}

export default Feed;
