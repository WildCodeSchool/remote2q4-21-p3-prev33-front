import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import "./CardsFormation.css";
import CardsQuiz from "../../components/cards/CardsQuiz";

const CardsFormation = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/training_category`)
      .then((res) => res.data)
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="CardsFormation">
      <h2 className="cardsformation-title">Formations</h2>
      <div className="formation">
        {categories.slice(0, 4).map((category, index) => (
          <Cards
            key={index}
            category={category.id}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>
      <h2 className="cardsformation-title-audit">Audits et Conseils</h2>
      <div className="advice">
        {categories.slice(4, 8).map((category, index) => (
          <Cards
            key={index}
            category={category.id}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>
      <div className="Quiz">
        <h2 className="cardsformation-title-quiz">
          Testez votre niveau de Securité
        </h2>
        <CardsQuiz />
      </div>
    </div>
  );
};

export default CardsFormation;
