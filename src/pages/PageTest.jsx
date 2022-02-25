import React from "react";
import Navbar from "../components/navbar/Navbar";
import IncendieErp from "../components/questionnaire_test/IncendieErp";
import IncendieErt from "../components/questionnaire_test/IncendieErt";
import RisquePro from "../components/questionnaire_test/RisquePro";
import Surete from "../components/questionnaire_test/Surete";
import "./PageTest.css";

const PageTest = () => {
  return (
    <>
      <Navbar />
      <div className="PageTest">
        <div className="pagetest-presentation">
          <h2 className="pagetest-h2">
            Tests pour évaluer le niveau de sécurité de votre entreprise
          </h2>
          <div className="pagetest-card">
            <p className="pagetest-p">
              Il existe 3 tests: - test Domaine Incendie - test Domaine Risques
              Professionnels - test Domaine Sûreté.
            </p>
            <p className="pagetest-p">
              Le test domaine incendie est en deux parties: ERP : Etablissements
              recevant du public / ERT : Etablissements recevant des
              travailleurs.
            </p>
          </div>
        </div>
        <div className="pagetest-container">
          <IncendieErp />
          <IncendieErt />
          <Surete />
          <RisquePro />
        </div>
      </div>
    </>
  );
};

export default PageTest;
