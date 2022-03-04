import React from "react";
import Caroussel from "../../components/caroussel/Caroussel";
import { SliderData } from "../../components/caroussel/SliderData";
import CardsFormation from "../../components/cards/CardsFormation";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Caroussel slides={SliderData} />
      <CardsFormation />
    </div>
  );
};

export default Home;
