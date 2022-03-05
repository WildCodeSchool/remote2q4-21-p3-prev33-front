import React from "react";
import aigle from "../../assets/logoprev33.png";
import "./Training.css";

const Training = () => {
  return (
    <div className="training">
      <div className="pdf">
        <div className="enteteformation">
          <div className="hautgauche">
            <img src="logopolice" alt="logopolice" />
            <br />
            <h2>SPE F1</h2>
          </div>
          <h1>TITRE FORMATION</h1>
          <img className="aigle" src={aigle} alt="logo" />
        </div>

        <div className="titre">
          <h3>INTITULE coucou </h3>
          <p>Texte à rajouter</p>
        </div>

        <div className="bloc">
          <div className="intituleformation">
            <h4>FORMATION</h4>
            <p>PREREQUIS</p>
            <p>textes à rajouter</p>
            <p>DUREE</p>
            <p>textes à rajouter</p>
            <p>EFFECTIF</p>
            <p>textes à rajouter</p>
            <p>PUBLIC</p>
            <p>textes à rajouter</p>
            <p>ATTRIBUTION FINALE</p>
            <p>textes à rajouter</p>
            <p>ORGANISME DE DELIVRANCE</p>
            <p>textes à rajouter</p>
            <p>TARIF</p>
            <p>textes à rajouter</p>
          </div>
          <div className="objecprog">
            <div className="objectif">
              <h4>OBJECTIF</h4>
              <p>
                A l'issue de cette formation, les participants seront capables
                de:
              </p>
              <p>textes à rajouter</p>
            </div>
            <div className="programme">
              <h4>PROGRAMME</h4>
              <p>textes à rajouter:</p>
            </div>
          </div>
        </div>

        <div className="bas">
          <div className="intervenant">
            <h5>INTERVENANT</h5>
            <p>textes à rajouter:</p>
          </div>
          <div className="pedago">
            <h5>APPROCHE PEDAGOGIQUE</h5>
            <p>textes à rajouter:</p>
          </div>
          <div className="eval">
            <h5>CONDITIONS D'EVALUATION</h5>
            <p>textes à rajouter:</p>
          </div>
        </div>
        <div className="bouton">
          <button className="favorite styled" type="button">
            Télécharger le PDF
          </button>
          <button className="favorite styled" type="button">
            Demander un devis
          </button>
        </div>
      </div>
    </div>
  );
};

export default Training;
