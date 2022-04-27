import React, { useState, useEffect } from "react";
import axios from "axios";
import CarrouselItem from "./CarrouselItem";

const CarrouselList = () => {
  const [items, setItems] = useState([]);

  const handleRefresh = () => {
    window.location.href="/admin"
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/carrousel`)
      .then((res) => res.data)
      .then((data) => setItems(data));
  }, [handleRefresh]);

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
