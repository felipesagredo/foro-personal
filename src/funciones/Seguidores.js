import React from 'react';

const Seguidores = ({ seguidores }) => {
  return (
    <div>
      <h2>Seguidores:</h2>
      <ul>
        {seguidores.map(seguidor => (
          <li key={seguidor.id}>{seguidor.nombre} </li>
        ))}
      </ul>
    </div>
  );
};

export default Seguidores;
