import React from "react";
import LOGO404 from "../../assets/img/LOGO404.gif";
import "./Defaultpage.css";

const Defaultpage = () => {
  return (
    <div className="defaultpage">
      <div className="defaultpage-container">
        <h1 className="defaultpage-h1">Désolé !</h1>
        <h2 className="defaultpage-h2">
          La page que vous recherchez n'existe pas.
        </h2>
        <img src={LOGO404} alt="logo 404" className="defaultpage-image" />

        <link rel="stylesheet" href="" className="defaultpage-link" />
      </div>
    </div>
  );
};

export default Defaultpage;
