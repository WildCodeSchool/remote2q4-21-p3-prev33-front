import React from "react";
import "./CardsQuiz.css";
import CardTest from "../../assets/img/CardTest_Logo.png";
import { Link } from "react-router-dom";

const CardsQuiz = () => {
  return (
    <div className="CardsQuiz">
      <div className="quiz quiz-fire1">
        <Link to="/tests">
          <img src={CardTest} alt="Card Test" />
        </Link>
      </div>
    </div>
  );
};

export default CardsQuiz;
