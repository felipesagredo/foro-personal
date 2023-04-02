import React from 'react';
import '../estilos/Feed.css';
import Story from './Story';

function Feed(props) {
  const {stories, user} = props;
  const historias = stories.map((story) => (

    <div className='stories_1' key={story.id}> 
      <Story 
        key={story.id}
        imageUrl={story.imageUrl} 
        user={user} 
        description={story.description}
        privacy={story.privacy}
      />
    </div>
  ));

  return (
    <div className='feed_contenedor_0'>
      <div className='feed_contenedor_1'>
          {historias}
      </div>
    </div>
  );
}

export default Feed;
