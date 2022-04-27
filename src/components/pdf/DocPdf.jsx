import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import SignUp from "../../pages/signup/SignUp";
import "./DocPdf.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const DocPdf = ({ formation }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1200;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

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
        <h1 className="pdf-h1">{formation.title}</h1>
        <span className="pdf-span">{formation.reference}</span>
      </div>
      <Document
        className="FormationPdf"
        file={`${process.env.REACT_APP_API_FILE}/${formation.link}`}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} width={width > breakpoint ? 1200 : 700} />
      </Document>
      <div className="piedPagePdf">
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} sur {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Précédente
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
            rel="noreferrer"
          >
            Télécharger le PDF
          </a>
        </button>
        <button className="buttonDownload devis" type="button">
          <NavLink to="/signup" className="header-link" element={<SignUp />}>
            Demander un devis
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default DocPdf;
