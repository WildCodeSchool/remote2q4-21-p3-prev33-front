import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./Pdf.css";

const Formation = () => {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/training/2`)
      .then((res) => res.data)
      .then((data) => setFormations(data));
  }, []);

  return (
    <div>
      <h1 className='formationTitle'>{formations.title}</h1>
      <h2 className='formationReference'>{formations.reference}</h2>
      <iframe src={formations.link} className='formationFile'/>
    </div>
  )
}

export default Formation;