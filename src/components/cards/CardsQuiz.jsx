import React from "react";
import "./CardsQuiz.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const CardsQuiz = () => {
  return (
    <div className="CardsQuiz">
      <div className="quiz quiz-fire1">
        <Link to="/tests">
          <h3>Test incendie 1</h3>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="quiz quiz-fire2">
        <Link to="/tests">
          <h3>test incendie 2</h3>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="quiz quiz-security">
        <Link to="/tests">
          <h3>test securité</h3>
          <br></br> <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="quiz quiz-RP">
        <Link to="/tests">
          <h3>test RP</h3>
          <br></br>
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default CardsQuiz;
