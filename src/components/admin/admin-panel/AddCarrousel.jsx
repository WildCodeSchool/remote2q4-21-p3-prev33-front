import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCarrousel = () => {
  const navigator = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    await axios.post(`${process.env.REACT_APP_API_URL}/carrousel`, formData);
    navigator("/admin");
  };

  return (
    <div className="adminCarrouselForm">
      <section className="admin-carrousel">
        <h2 className="admin-h2">Section Carrousel</h2>
        <label className="admin-label" htmlFor="title">
          Choix du nom de l'image
        </label>
        <input
          className="admin-input"
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="admin-label" htmlFor="image">
          Lien de l'image
        </label>
        <input
          className="admin-input"
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button className="admin-button" type="submit" onClick={handleSubmit}>
          Envoyer
        </button>
      </section>
    </div>
  );
};

export default AddCarrousel;
