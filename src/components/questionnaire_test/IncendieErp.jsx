import React, { useState } from "react";
import { incendieErp } from "../../data/data";

const IncendieErp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const resetScore = () => {
    setScore(0);
    setShowScore(false);
    setCurrentQuestion(0);
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < incendieErp.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="test-card">
      {showScore ? (
        <div className="score-section">
          <p>
            Votre résultat est de {score} sur {incendieErp.length}
          </p>
          <div className="score-resultat">
            <p>
              - 10 points: La sécurité incendie est organisée, vous connaissez
              les consignes.
            </p>
            <p>
              - 8 à 9 points: La securité est organisée cependant une formation
              ou une intervention de conseil permettrait la mise à niveau.
            </p>
            <p>
              - 6 à 9 points: Des dispositions sont prises mais votre niveau de
              sécurite paraît perfectible. Une intervention de prev 33 semble
              nécessaire pour vous conseiller, afin d'identifier les facteurs
              d'amélioration.
            </p>
            <p>
              - 0 à 5 points: Votre niveau de sécurité paraît faible. Une
              intervention de Prev 33 semble nécessaire pour vous conseiller
              afin d'identifier les facteurs d'amélioration.
            </p>
          </div>
          <button className="button-close" onClick={resetScore}>
            Fermer
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{incendieErp.length}
              <span className="question-title incendie">
                Domaine Incendie ERP
              </span>
            </div>
            <div className="question-text">
              {incendieErp[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {incendieErp[currentQuestion].answerOptions.map(
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
          </div>
        </>
      )}
    </div>
  );
};

export default IncendieErp;
