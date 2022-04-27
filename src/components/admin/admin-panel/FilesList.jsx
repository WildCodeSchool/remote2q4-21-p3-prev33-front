import React, { useState, useEffect } from "react";
import axios from "axios";
import FilesItem from "./FilesItem";
import "./FilesList.css"

const FilesList = () => {
  const [files, setFiles] = useState([]);
  const [categoryTraining, setCategoryTraining] = useState("");
  const categories = [
    {
      id: 1,
      name: "Incendie",
    },
    {
      id: 2,
      name: "Sûreté",
    },
    {
      id: 3,
      name: "Risques professionnels",
    },
    {
      id: 4,
      name: "Formation Spécifique",
    },
    {
      id: 5,
      name: "Prévention Incendie",
    },
    {
      id: 6,
      name: "Assistance Sûreté",
    },
    {
      id: 7,
      name: "Assistance Risques Pro",
    },
    {
      id: 8,
      name: "Conseil",
    }
  ];

  const handleRefresh = () => {
    window.location.href = "/admin";
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/training`)
      .then((res) => res.data)
      .then((data) => setFiles(data));
  }, [handleRefresh]);

  return (
    <div className="filesList">
      <ol className="files-ol">
        {categories.map((category, index) => (
          <li className="files-li" key={index}>
            <input
              className="files-input"
              type="radio"
              id={category.id}
              name="categoryRadio"
              onChange={(e) => setCategoryTraining(e.target.id)}
            />
            <label className="files-label" htmlFor={category.id}>
              {category.name}
            </label>
          </li>
        ))}
      </ol>
      <div className="filesList-container">
        {files &&
          files
            .filter(
              (category) =>
                category.training_category_id == `${categoryTraining}`
            )

            .map((file) => <FilesItem key={file.id} file={file} />)}
      </div>
    </div>
  );
};

export default FilesList;
