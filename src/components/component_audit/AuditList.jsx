import React, { useState, useEffect } from "react";
import axios from "axios";
import AuditItem from "./AuditItem";

const AuditList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/training_category`)
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
