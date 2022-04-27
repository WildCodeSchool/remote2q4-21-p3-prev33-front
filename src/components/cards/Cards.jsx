import "./Cards.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Cards = ({ category, name, image }) => {
  const [trainings, setTrainings] = useState([]);
  const [flipCard, setFlipCard] = useState(true);

  function returnedTheCard() {
    setFlipCard(!flipCard);
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/training_category/${category}/trainings`)
      .then((res) => res.data)
      .then((data) => setTrainings(data));
  }, []);

  return (
    <div className="Cards">
      <span className="title-card">{name}</span>
      <div
        onClick={returnedTheCard}
        className={flipCard ? "card-home" : "card-flip"}
      >
        <div className="side card_face--front">
          <img src={image} alt={name} />
        </div>

        <div className="side card_face--back">
          <div className="link-card">
            {trainings.map((training, index) => (
              <Link to={{ pathname: `/formation/${training.title}` }} key={index} className="link">
                {training.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
