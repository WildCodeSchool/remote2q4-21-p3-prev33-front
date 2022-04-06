import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AuditItem = ({ menu, name }) => {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/training_category/${menu}/trainings`
      )
      .then((res) => res.data)
      .then((data) => setTrainings(data));
  }, []);

  return (
    <div>
      <div className="item-cards">
        <h3 className="item-h3">{name}</h3>
        {trainings.map((training, index) => (
          <Link
            to={{ pathname: `/audit/${training.title}` }}
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

export default AuditItem;
