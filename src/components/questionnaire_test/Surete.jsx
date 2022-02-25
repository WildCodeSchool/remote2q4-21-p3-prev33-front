import React, { useState } from "react";
import { surete } from "../../data/data";

const Surete = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < surete.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="card">
      {showScore ? (
        <div className="score-section">
          Votre résultat est de {score} sur {surete.length}
          <p className="score-resultat">
            <p>
              - 10 points: La sûreté est organisée, les vulnérabilités sont
              prises en comptes.
            </p>
            <p>
              - 7 à 9 points: Des outils de prévention existent, mais la prise
              en compte de certains items est sûrement perfectible. Une
              intervention de conseil pourrait être necéssaire si vous ne
              disposez pas de ressources en interne.
            </p>
            <p>
              - 4 à 6 points: La sûreté est moyenne. Il exite plusieurs
              vulnérabilités. Une vraie politique de préevention est sûrement
              necessaire. Vous pouvez vous faire aider. Une premiere évaluation
              ne coûte rien.
            </p>
            <p>
              - 0 à 5 points: Le niveau de sûreté est bas. Vos installations et
              /ou votre personnel sont peut-être menacés. Un diagnostic sûreté
              est sûrement nécessaire pour vous proposer une action de
              prévention et de protection.
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
              <span>Question {currentQuestion + 1}</span>/{surete.length}
              <span className="question-title"> - Domaine Sûreté</span>
            </div>
            <div className="question-text">
              {surete[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {surete[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  className="button-surete"
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

export default Surete;
