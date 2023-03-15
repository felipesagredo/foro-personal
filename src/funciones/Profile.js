import React from 'react';
import Feed from './Feed';

function Profile(props) {
  return (
    <div>
      <img src={props.imageUrl} alt={props.name} />
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.followers} seguidores</p>
      <p>{props.following} seguidos</p>
      <Feed stories={props.stories} />
    </div>
  );
}

export default Profile;
