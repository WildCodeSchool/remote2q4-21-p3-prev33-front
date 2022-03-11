import React from "react";
import "./CardsQuiz.css";
import CardTest from "../../assets/CardTest.png";
import { Link } from "react-router-dom";

const CardsQuiz = () => {
  return (
    <div className="CardsQuiz">
      <div className="quiz quiz-fier1">
        <Link to="/tests">
          <img src={CardTest} alt="Card Test" />
        </Link>
      </div>
      {/* <div className="quiz quiz-fire2">
        <Link to="/tests">
          <h2>Test Incendie ERT</h2>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="quiz quiz-security">
        <Link to="/tests">
          <h2>test Sûreté</h2>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="quiz quiz-RP">
        <Link to="/tests">
          <h2>test Risques Professionnels</h2>
          <img src={logo} alt="logo" />
        </Link>
      </div> */}
    </div>
  );
};

export default CardsQuiz;
