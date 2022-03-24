import React, { useState, useEffect } from "react";
import axios from "axios";
import CarrouselItem from "./CarrouselItem";

const CarrouselList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/carrousel")
      .then((res) => res.data)
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="carrouselList">
      <div className="carrouselList-container">
        {items.map((item) => (
          <CarrouselItem
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CarrouselList;
