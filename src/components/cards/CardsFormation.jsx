import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import "./CardsFormation.css";
import CardsQuiz from "../../components/cards/CardsQuiz";

const CardsFormation = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/training_category`)
      .then((res) => res.data)
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="CardsFormation">
      <h2 className="title">Formation</h2>
      <div className="formation">
        {categories.slice(0, 4).map((category) => (
          <Cards
            category={category.id}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>
      <h2 className="title">Audits et Conseils</h2>
      <div className="advice">
        {categories.slice(4, 8).map((category) => (
          <Cards
            category={category.id}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>
      <div className="Quiz">
        <h2 className="title">Testez votre niveau de Securité</h2>
        <CardsQuiz />
      </div>
    </div>
  );
};

export default CardsFormation;