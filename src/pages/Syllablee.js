import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";
import syllablee_pdf from "../assets/pdf/syllablee_pdf.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Syllablee = () => {
  const [numPages, setNumPages] = useState(7);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <PDFDocumentWrapper>
      <Document file={syllablee_pdf}>
        <Page
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          loading=""
        />
        <Page
          pageNumber={2}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          loading=""
        />
        <Page
          pageNumber={3}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          loading=""
        />
        <Page
          pageNumber={4}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          loading=""
        />
        <Page
          pageNumber={5}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          loading=""
        />
        <Page
          pageNumber={6}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          loading=""
        />
      </Document>
    </PDFDocumentWrapper>
  );
};

const PDFDocumentWrapper = styled.div`
  canvas {
    width: 100% !important;
    height: auto !important;
  }
  min-height: 100%;
  background-color: #e2eeec;
`;
export default Syllablee;
