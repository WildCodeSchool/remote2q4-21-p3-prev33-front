import React from "react";
import CardsFormation from "../../components/cards/CardsFormation";

import "./Home.css";

const home = () => {
  return (
    <div className="Home">
      <div className="home-cards">
        <CardsFormation />
      </div>
    </div>
  );
};

export default home;
