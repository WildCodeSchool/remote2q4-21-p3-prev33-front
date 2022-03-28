import React, { useState, useEffect } from "react";
import axios from "axios";
// import DetailTraining from "./DetailTraining";
import DocPdf from "../../components/pdf/DocPdf";
import { useParams } from "react-router-dom";
import ItemList from "../../components/component_formation/ItemList";

const Training = () => {
  const [formation, setFormation] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/training/training/${params.title}`)
      .then((res) => res.data)
      .then((data) => setFormation(data));
  }, [params.title]);

  return (
    <div>
      <ItemList />
      <div>
        <DocPdf formation={formation} />
        {/* <DetailTraining formation={formation} /> */}
      </div>
    </div>
  );
};

export default Training;
