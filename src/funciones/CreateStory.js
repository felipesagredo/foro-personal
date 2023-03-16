import React, { useState } from "react";

const CreateStory = ({ onCreateStory }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [privacy, setPrivacy] = useState("public");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handlePrivacyChange = (e) => {
    setPrivacy(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const story = { title, description, image, privacy };
    onCreateStory(story);
  };

  return (
    <div className="cstory_contenedor_1">
      <h2>Crear historia</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          Descripción:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>
        <br />
        <label>
          Imagen o video:
          <input type="file" accept="image/*, video/*" onChange={handleImageChange} />
        </label>
        <br />
        <label>
          Privacidad:
          <select value={privacy} onChange={handlePrivacyChange}>
            <option value="public">Público</option>
            <option value="private">Privado</option>
          </select>
        </label>
        <br />
        <button type="submit">Publicar</button>
      </form>
    </div>
  );
};

export default CreateStory;
