import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";

import "./ItemList.css";

const ItemList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/training_category")
      .then((res) => res.data)
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="ItemList">
      <div className="ItemList-container">
        {categories.slice(0, 4).map((menu) => (
          <Item key={menu.id} menu={menu} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
