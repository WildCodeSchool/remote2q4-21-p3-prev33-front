import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FilesItem = ({ file }) => {
  const navigator = useNavigate();

  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/training/${file.id}`);
    navigator("/admin");
  };

  return (
    <div>
      <div className="files-cards">
        <h3 className="files-h3">{file.title}</h3>
        <div className="files-category">
          <span>Catégorie N°</span>
          {file.training_category_id}
        </div>

        <button
          className="files-button"
          type="submit"
          onClick={() => handleDelete(file.id)}
        >
          Effacer
        </button>
      </div>
    </div>
  );
};

export default FilesItem;
