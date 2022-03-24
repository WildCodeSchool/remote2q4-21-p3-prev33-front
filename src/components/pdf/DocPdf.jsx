import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./DocPdf.css";

import Pdf from "../../assets/pdf/Pdf.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const DocPdf = ({ formation }) => {
  const [file, setFile] = useState(Pdf);
  // const [file, setFile] = useState(formation.link);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const url = "http://localhost:8000";



  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="DocPdf">
      <div className="titleAndRef">
        <h1>{formation.title}</h1>
        {/* <span>{formation.reference}</span> */}
        <span>IF1</span>
      </div>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        className="FormationPdf"
      >
        {/* <Document file={url+file} onLoadSuccess={ onDocumentLoadSuccess } > */}
        <Page pageNumber={pageNumber} width={1200} />
      </Document>

      <div className="buttonDownload">
        <button>
          <a target="_blank" href={file}>Telechargé le PDF</a>
        </button>
      </div>
    </div>
  );
};

export default DocPdf;
