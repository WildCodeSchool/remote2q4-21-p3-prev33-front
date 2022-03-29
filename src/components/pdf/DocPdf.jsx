import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./DocPdf.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const DocPdf = ({ formation }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className="DocPdf">
      <div className="titleAndRef">
        <h1>{formation.title}</h1>
        <span>{formation.reference}</span>
      </div>
      <Document
        className="FormationPdf"
        file={`${process.env.REACT_APP_API_FILE}/${formation.link}`}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} width={1200} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} sur {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Précédent
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Suivante
        </button>
      </div>

      <div className="buttonDownload">
        <button>
          <a
            href={`${process.env.REACT_APP_API_FILE}/${formation.link}`}
            target="_blank"
          >
            Télécharger le PDF
          </a>
        </button>
      </div>
    </div>
  );
};

export default DocPdf;
