import React from 'react';
import '../estilos/EstiloPerfil.css';
import Story from './Story';

function Feed(props) {
  const stories = props.stories.map(story => (

    <div className='stories_1' key={story.id}> 
      <Story 
      key={story.id}
      title={story.title} 
      imageUrl={story.imageUrl} 
      description={story.description} 
      privacy={story.privacy}
      />
    </div>
  ));

  return (
    <div className='feed_contenedor_0'>
        <h2>Historias</h2>
        {stories}
        <button onClick={props.onLoadMore}>Ver más historias</button>
    </div>
  );
}

export default Feed;
