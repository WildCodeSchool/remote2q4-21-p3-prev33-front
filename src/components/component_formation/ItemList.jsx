import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";

import "./ItemList.css";

const ItemList = () => {
  const [categories, setCategories] = useState([{
    "id": 1,
    "name": "Incendie",
    "image": "https://netatmostatic.blob.core.windows.net/static/images/guides/security/fire/solutions/type-of-fire-extinguisher-780w.jpg"
  },
  {
    "id": 2,
    "name": "Sûreté",
    "image": "https://cj-securite.fr/wp-content/uploads/2018/12/rad-sicherheit-responsive-header-personenschutz.jpg"
  },
  {
    "id": 3,
    "name": "Risque professionnels",
    "image": "https://www.formation-alternance-vendee.com/wp-content/uploads/2021/01/header-sst.jpg"
  },
  {
    "id": 4,
    "name": "Formation Spécifique",
    "image": "https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    "id": 5,
    "name": "Prévention Incendie",
    "image": "https://images.unsplash.com/photo-1621135366028-8f5de4e817a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    "id": 6,
    "name": "Assistance Sûrté",
    "image": "https://images.unsplash.com/photo-1570044389283-6713c3b1c48b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  },
  {
    "id": 7,
    "name": "Assistance Risques Pro",
    "image": "https://images.unsplash.com/photo-1624638760852-8ede1666ab07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    "id": 8,
    "name": "Conseil",
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
  },
  {
    "id": 9,
    "name": "-",
    "image": ""
  }]);

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/training_category`)
  //     .then((res) => res.data)
  //     .then((data) => setCategories(data));
  // }, []);

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
