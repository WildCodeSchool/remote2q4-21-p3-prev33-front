import React, { useState, useEffect } from "react";
import axios from "axios";
import AuditItem from "./AuditItem";

import "./AuditList.css";

const AuditList = () => {
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
        {categories.slice(4, 8).map((menu, index) => (
          <AuditItem key={index} menu={menu.id} name={menu.name} />
        ))}
      </div>
    </div>
  );
};

export default AuditList;
