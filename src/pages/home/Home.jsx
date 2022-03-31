import React, { useState, useEffect } from "react";
import axios from "axios";
import Caroussel from "../../components/caroussel/Caroussel";
import CardsFormation from "../../components/cards/CardsFormation";
import "./Home.css";

const Home = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/carrousel`)
      .then((res) => res.data)
      .then((data) => setImage(data));
      console.log(image);
  }, []);
  return (
    <div className="home">
      <div className="home-background"></div>

      <Caroussel slides={image} />
      <CardsFormation />
    </div>
  );
};

export default Home;
