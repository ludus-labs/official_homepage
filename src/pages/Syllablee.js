import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Ring } from "react-cssfx-loading";
import { Button } from "@chakra-ui/react";
import styled from "styled-components";
import syllablee_pdf from "../assets/pdf/syllablee_pdf.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Syllablee = () => {
  return (
    <Background>
      <Title>SYLLABLEE</Title>
      <Button
        width={"100px"}
        borderRadius={"50px"}
        backgroundColor={"#00A68A"}
        color={"white"}
        fontSize={"30px"}
        marginBottom={"30px"}
        _hover={{ backgroundColor: "#07866F" }}
        onClick={() => {
          window.open("https://syllablee.com");
        }}
      >
        →
      </Button>
      <PDFDocumentWrapper>
        <Document
          file={syllablee_pdf}
          loading=<div
            style={{
              marginTop: "50vh",
              marginBottom: "50vh",
              zIndex: "100",
              alignItems: "center",
            }}
          >
            <Ring color="#00A68A" width="100px" height="100px" duration="1s" />
          </div>
        >
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
        </Document>
      </PDFDocumentWrapper>
    </Background>
  );
};

const Background = styled.div`
  margin-top: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;
const Title = styled.p`
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
const PDFDocumentWrapper = styled.div`
  canvas {
    width: 100% !important;
    height: auto !important;
  }
  min-height: 100%;
  margin-bottom: 20px;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e2eeec;
  border-radius: 30px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 93%;
  }
`;
export default Syllablee;
