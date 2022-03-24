import React from "react";
import "./Formations.css";
import ItemList from "../../components/component_formation/ItemList";
// import Training from "../training/Training";
import Formation from "../../components/files/Pdf";

const Formations = () => {
  return (
    <>
      <div className="Formations"></div>
      <ItemList />
      {/* <Training /> */}
      <Formation />
    </>
  );
};

export default Formations;
