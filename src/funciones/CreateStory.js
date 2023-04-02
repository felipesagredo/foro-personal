import React, { useState } from "react";
import '../estilos/CreateStory.css';

const CreateStory = ({ onCreateStory }) => {
  
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [privacy, setPrivacy] = useState("0");

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handlePrivacyChange = (e) => {
    setPrivacy(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const story = { description, imageUrl, privacy };
    onCreateStory(story);
    setDescription("");
    setImageUrl("");
    setPrivacy(0);
  };

  return (
    <div className="cstory_contenedor_0">
    <div className="cstory_contenedor_1">
      <h2>Crear historia</h2>

      <form className="cstory_contenedor_2" onSubmit={handleSubmit}>
          
          <textarea value={description} onChange={handleDescriptionChange} />
          <p>Imagen o video:</p>

          <input type="file" accept="image/*, video/*" onChange={handleImageChange} />
          
          <p>A quién va dirigido:</p>

          <select value={privacy} onChange={handlePrivacyChange}>
            <option className="option0" value="0">Selecciona una opción:</option>
            <option className="option1" value="Todos">Público / Global</option>
            <option className="option2" value="Amigos">Público / Amigos</option>
            <option className="option3" value="Privado">Privado al Perfil</option>
          </select>

        <button type="submit">Publicar</button>
        
      </form>
    </div>
    </div>
  );
};

export default CreateStory;
