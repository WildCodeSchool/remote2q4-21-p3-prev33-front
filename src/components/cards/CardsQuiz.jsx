import React from "react";
import "./CardsQuiz.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const CardsQuiz = () => {
  return (
    <div className="CardsQuiz">
      <div className="quiz quiz-fier1">
        <Link to="/test">
          <h2>Test incendie 1</h2>
          {/* <img src={logo} alt="logo" /> */}
        </Link>
      </div>
      <div className="quiz quiz-fire2">
        <Link to="/test">
          <h2>test incendie 2</h2>
          {/* <img src={logo} alt="logo" /> */}
        </Link>
      </div>
      <div className="quiz quiz-security">
        <Link to="/test">
          <h2>test securité</h2>
          {/* <img src={logo} alt="logo" /> */}
        </Link>
      </div>
      <div className="quiz quiz-RP">
        <Link to="/test">
          <h2>test RP</h2>
          {/* <img src={logo} alt="logo" /> */}
        </Link>
      </div>
    </div>
  );
};

export default CardsQuiz;
