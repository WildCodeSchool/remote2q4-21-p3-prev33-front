import React, { useState } from "react";
import { incendieErt } from "../../data/data";

const IncendieErt = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < incendieErt.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="card">
      {showScore ? (
        <div className="score-section">
          Votre résultat est de {score} sur {incendieErt.length}
          <p className="score-resultat">
            <p>
              - 11 points: La sécurité incendie est organisée, vous connaissez
              les consignes.
            </p>
            <p>
              - 8 à 10 points: La securité est organisée cependant une formation
              ou une intervention de conseil permettrait la mise à niveau.
            </p>
            <p>
              - 6 à 7 points: Des dispositions sont prises mais votre niveau de
              sécurite paraît perfectible. Une intervention de prev 33 semble
              nécessaire pour vous conseiller, afin d'identifier les facteurs
              d'amélioration.
            </p>
            <p>
              - 0 à 5 points: Votre niveau de sécurité paraît faible. Une
              intervention de Prev 33 semble nécessaire pour vous conseiller
              afin d'identifier les facteurs d'amélioration.
            </p>
          </p>
          <button className="button-close" onClick={() => setShowScore(false)}>
            Fermer
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{incendieErt.length}
              <span className="question-title"> - Domaine Incendie ERT</span>
            </div>
            <div className="question-text">
              {incendieErt[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {incendieErt[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  className="button-incendie"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
            <span className="span-icon" onClick={() => setCurrentQuestion(0)}>
              <svg width="2.5em" height="1.5em" viewBox="0 0 24 24">
                <path
                  d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default IncendieErt;
