import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Ring } from "react-cssfx-loading";
import { Button } from "@chakra-ui/react";
import styled from "styled-components";
import kuplace_pdf from "../assets/pdf/kuplace_pdf.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Kuplace = () => {
  return (
    <Background>
      <Title>KUplace</Title>
      <Button
        width={"100px"}
        borderRadius={"50px"}
        backgroundColor={"#FF445E"}
        color={"white"}
        fontSize={"30px"}
        marginTop={"5px"}
        marginBottom={"30px"}
        _hover={{ backgroundColor: "#DF1735" }}
        onClick={() => {
          window.open("https://kuplace.page.link/promotion");
        }}
      >
        →
      </Button>
      <PDFDocumentWrapper>
        <Document
          file={kuplace_pdf}
          loading=<div
            style={{
              marginTop: "50vh",
              marginBottom: "50vh",
              zIndex: "100",
              alignItems: "center",
            }}
          >
            <Ring color="#FF445E" width="100px" height="100px" duration="1s" />
          </div>
        >
          <Page
            pageNumber={1}
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
  background-color: #fce8eb;
  border-radius: 30px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 93%;
  }
`;
export default Kuplace;
