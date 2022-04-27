import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const AddFiles = () => {
  const [title, setTitle] = useState("");
  const [reference, setReference] = useState("");
  const [link, setLink] = useState("");
  const [trainingCategories, setTrainingCategories] = useState([]);
  const [categoryTraining, setCategoryTraining] = useState("");

  useEffect(() => {
    const getTrainingCategory = async () => {
      const url = `${process.env.REACT_APP_API_URL}/training_category`;
      axios
        .get(url)
        .then((res) => {
          if (res.status === 200) {
            setTrainingCategories(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getTrainingCategory();
  }, []);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("reference", reference);
    formData.append("link", link);
    formData.append("training_category_id", categoryTraining);

    await axios.post(`${process.env.REACT_APP_API_URL}/training`, formData);
  };

  return (
    <div className="adminCarrouselForm">
      <section className="admin-carrousel">
        <h2 className="admin-h2">Section Fichiers</h2>
        <label className="admin-label" htmlFor="title">
          Titre
        </label>
        <input
          className="admin-input"
          type="text"
          id="title"
          placeholder="Entrer un titre de fichier"
          onChange={(event) => setTitle(event.target.value)}
        />
        <label className="admin-label" htmlFor="reference">
          Référence de fichier
        </label>
        <input
          className="admin-input"
          type="text"
          id="reference"
          placeholder="Entrer une référence de format INC F1"
          onChange={(event) => setReference(event.target.value)}
        />

        <label htmlFor="categoryTraining" className="FormSignalLabel">
          Catégorie
          <select
            id="categoryTraining"
            value={categoryTraining}
            onChange={(e) => setCategoryTraining(e.target.value)}
          >
            {trainingCategories.reverse().map((trainingCategory) => {
              return (
                <option value={trainingCategory.id} key={trainingCategory.id}>
                  {trainingCategory.name}
                </option>
              );
            })}
          </select>
        </label>

        <label className="admin-label" htmlFor="link">
          Fichier
        </label>
        <input
          className="admin-input"
          type="file"
          id="link"
          accept="application/pdf"
          onChange={(event) => setLink(event.target.files[0])}
        />
        <button className="admin-button" type="submit" onClick={handleSubmit}>
          Envoyer
        </button>
      </section>
    </div>
  );
};

export default AddFiles;
