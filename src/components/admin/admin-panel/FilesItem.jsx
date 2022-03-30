import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Document, Page, pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const FilesItem = ({ file, formation }) => {
  const navigator = useNavigate();

  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  const handleDelete = (id) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/training/${file.id}`);
    navigator("/admin");
  };

  return (
    <div>
      <div className="files-cards">
        <h3 className="files-h3">{file.title}</h3>
        <div className="files-category">
          <span>Catégorie N°</span>
          {file.training_category_id}
        </div>
        {/* <Document formation={formation.link} 
        onLoadSuccess={onDocumentLoadSuccess}
        className="FormationPdf"
        >
          <Page pageNumber={pageNumber} width={1200} />
        </Document> */}
        {/* <iframe
          src={`${process.env.REACT_APP_API_URL}/${file.link}`}
          className="files-img"
          alt={`${file.title}`}
        /> */}
        <button
          className="files-button"
          type="submit"
          onClick={() => handleDelete(file.id)}
        >
          Effacer
        </button>
      </div>
    </div>
  );
};

export default FilesItem;
