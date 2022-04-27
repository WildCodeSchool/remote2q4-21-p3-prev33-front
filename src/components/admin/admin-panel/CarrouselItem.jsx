import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CarrouselItem = ({ id, title, image }) => {
  const navigator = useNavigate();

  const handleDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/carrousel/${id}`);
    navigator("/admin");
  };

  return (
    <div>
      <div className="carrousel-cards">
        <h3 className="carrousel-h3">{title}</h3>
        <img
          className="carrousel-img"
          src={`${process.env.REACT_APP_API_IMG}/${image}`}
          alt={`${title}`}
        />
        <button
          className="carrousel-button"
          type="submit"
          onClick={() => handleDelete(id)}
        >
          Effacer
        </button>
      </div>
    </div>
  );
};

export default CarrouselItem;
