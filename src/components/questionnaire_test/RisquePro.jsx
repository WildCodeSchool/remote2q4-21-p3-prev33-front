import React, { useState } from "react";
import { risquePro } from "../../data/data";

const RisquePro = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < risquePro.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="card">
      {showScore ? (
        <div className="score-section">
          Votre résultat est de {score} sur {risquePro.length}
          <p className="score-resultat">
            <p>
              - 10 points: La prevention des risques professionnels est
              apparement prise en compte dans votre STE.
            </p>
            <p>
              - 7 à 9 points: Certains points paraissent perfectibles, vous
              pouvez combler les écarts en interne ou solliciter Prev 33 pour
              quelques conseils.
            </p>
            <p>
              - 4 à 6 points: Il y a des manques véritables qui devront être
              comblés rapidement par une vrai politique de prevention et une
              sensibilisation du personnel.
            </p>
            <p>
              - 0 à 3 points: Votre niveau de securité paraît faible. Vous
              pouvez engager votre responsabilité penale en cas d'accident. Une
              intervention d'assistant est necessaire pour identifier les écarts
              et vous proposer des solutions.
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
              <span>Question {currentQuestion + 1}</span>/{risquePro.length}
              <span className="question-title">
                {" "}
                - Domaine Risques Professionnels
              </span>
            </div>
            <div className="question-text">
              {risquePro[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {risquePro[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  className="button-risquePro"
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

export default RisquePro;
