import React from "react";
import Caroussel from "../../components/caroussel/Caroussel";
import CardsFormation from "../../components/cards/CardsFormation";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Caroussel />
      <CardsFormation />
    </div>
  );
};

export default Home;
