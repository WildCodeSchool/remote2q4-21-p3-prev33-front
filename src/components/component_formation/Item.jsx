import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Item.css";

const Item = ({ menu, name }) => {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/training_category/${menu}/trainings`)
      .then((res) => res.data)
      .then((data) => setTrainings(data));
  }, []);

  return (
    <div>
      <div className="item-cards">
        <h3 className="item-h3">{name}</h3>
        {trainings.map((training, index) => (
          <Link
            to={{ pathname: `/formation/${training.title}` }}
            className="item-a"
            rel="noopener noreferrer"
            key={index}
          >
            <span className="item-span">{training.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Item;
