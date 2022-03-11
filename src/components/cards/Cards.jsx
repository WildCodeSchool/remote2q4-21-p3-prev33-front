import "./Cards.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Cards = ({ category, name, image }) => {
  const [trainings, settrainings] = useState([]);
  const [flipCard, setFlipCard] = useState(true);

  function returnedTheCard() {
    setFlipCard(!flipCard);
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/training_category/${category}/trainings`)
      .then((res) => res.data)
      .then((data) => settrainings(data));
  }, []);

  console.log(flipCard);

  return (
    <div className="Cards">
      <div className={flipCard ? "card-home" : "card-flip"}>
        <div className="side card_face--front">
          <span className="title-card">{name}</span>
          <img onClick={returnedTheCard} src={image} alt={name} />
        </div>

        <div className="side card_face--back">
          <div className="link-card">
            {trainings.map((training, index) => (
              <Link to="/" className="link" key={index}>
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
