import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Ring } from "react-cssfx-loading";
import { Button } from "@chakra-ui/react";
import styled from "styled-components";
import gogo_pdf from "../assets/pdf/gogo_pdf.pdf";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Gogo = () => {
  return (
    <Background>
      <Title>ㄱ?(GOGO)</Title>
      <Button
        width={"200px"}
        borderRadius={"50px"}
        backgroundColor={"#E9967A"}
        color={"white"}
        fontSize={"20px"}
        marginTop={"5px"}
        marginBottom={"5px"}
        _hover={{ backgroundColor: "#CE6846" }}
        onClick={() => {
          window.open(
            "https://play.google.com/store/apps/details?id=com.globup.gogo&pli=1"
          );
        }}
      >
        <FaGooglePlay size="15" color="white" style={{ marginRight: 5 }} />
        Google Play
      </Button>
      <Button
        width={"200px"}
        borderRadius={"50px"}
        backgroundColor={"#E9967A"}
        color={"white"}
        fontSize={"20px"}
        marginTop={"5px"}
        marginBottom={"30px"}
        _hover={{ backgroundColor: "#CE6846" }}
        onClick={() => {
          alert("App Store 검토 중입니다.\n곧 출시되니 조금만 기다려주세요 :)");
        }}
      >
        <FaApple size="20" color="white" style={{ marginRight: 5 }} />
        App Store
      </Button>
      <div
        style={{
          position: "relative",
          width: "80%",
          paddingBottom: "45%",
        }}
      >
        {" "}
        <iframe
          src="https://youtube.com/embed/5K4aFRvrWBc"
          alt="gogo_video"
          width="80%"
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      </div>
      <PDFDocumentWrapper>
        <Document
          file={gogo_pdf}
          loading=<div
            style={{
              marginTop: "50vh",
              marginBottom: "50vh",
              zIndex: "100",
              alignItems: "center",
            }}
          >
            <Ring color="#E9967A" width="100px" height="100px" duration="1s" />
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
          <div style={{ height: "100px" }}></div>
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
          <Page
            pageNumber={7}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            loading=""
          />
          <Page
            pageNumber={8}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            loading=""
          />
          <Page
            pageNumber={9}
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
  margin-top: 40px;
  margin-bottom: 20px;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffe8e0;
  border-radius: 30px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 93%;
  }
`;
export default Gogo;
