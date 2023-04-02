import React from 'react';
import '../estilos/Feed.css';
import Story from './Story';

function Feed(props) {
  const stories = props.stories.map(story => (

    <div className='stories_1' key={story.id}> 
      <Story 
      key={story.id}
      title={story.title}
      user={story.user} 
      imageUrl={story.imageUrl} 
      description={story.description} 
      privacy={story.privacy}
      />
    </div>
  ));

  return (
    <div className='feed_contenedor_0'>
      <div className='feed_contenedor_1'>
        <div className='feed_contenedor_2'>

          <h2>Feed de Historias</h2>
          {stories}
          <button onClick={props.onLoadMore}>Ver más historias</button>
        </div>
      </div>
    </div>
  );
}

export default Feed;
