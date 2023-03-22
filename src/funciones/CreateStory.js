import React, { useState } from "react";

const CreateStory = ({ onCreateStory }) => {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [privacy, setPrivacy] = useState("public");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

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
    const story = { title, description, imageUrl, privacy };
    onCreateStory(story);
  };

  return (
    <div className="cstory_contenedor_0">
      <h2>Crear historia</h2>
      <form className="cstory_contenedor_1" clas onSubmit={handleSubmit}>
          <p>Título:</p>
        <input type="text" value={title} onChange={handleTitleChange} />        
          <p>Descripción:</p>
          <textarea value={description} onChange={handleDescriptionChange} />
          <p>Imagen o video:</p>
          <input type="file" accept="image/*, video/*" onChange={handleImageChange} />
          <p>Privacidad:</p>
          <select value={privacy} onChange={handlePrivacyChange}>
            <option value="public">Público</option>
            <option value="private">Privado</option>
          </select>
        <button type="submit">Publicar</button>
      </form>
    </div>
  );
};

export default CreateStory;
