import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Ring } from "react-cssfx-loading";
import { Button } from "@chakra-ui/react";
import styled from "styled-components";
import gogo_banner from "../assets/images/gogo/gogo_banner.png";
import tutorial_pc_1 from "../assets/images/gogo/tutorial_pc/tutorial1.png";
import tutorial_pc_2 from "../assets/images/gogo/tutorial_pc/tutorial2.png";
import tutorial_pc_3 from "../assets/images/gogo/tutorial_pc/tutorial3.png";
import tutorial_pc_4 from "../assets/images/gogo/tutorial_pc/tutorial4.png";
import tutorial_pc_5 from "../assets/images/gogo/tutorial_pc/tutorial5.png";
import tutorial_pc_6 from "../assets/images/gogo/tutorial_pc/tutorial6.png";
import tutorial_pc_7 from "../assets/images/gogo/tutorial_pc/tutorial7.png";
import tutorial_mobile_1 from "../assets/images/gogo/tutorial_mobile/tutorial1.png";
import tutorial_mobile_2 from "../assets/images/gogo/tutorial_mobile/tutorial2.png";
import tutorial_mobile_3 from "../assets/images/gogo/tutorial_mobile/tutorial3.png";
import tutorial_mobile_4 from "../assets/images/gogo/tutorial_mobile/tutorial4.png";
import tutorial_mobile_5 from "../assets/images/gogo/tutorial_mobile/tutorial5.png";
import tutorial_mobile_6 from "../assets/images/gogo/tutorial_mobile/tutorial6.png";
import tutorial_mobile_7 from "../assets/images/gogo/tutorial_mobile/tutorial7.png";
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
          window.open(
            "https://apps.apple.com/us/app/%E3%84%B1/id6444402183?l=ko"
          );
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
        <iframe
          src="https://youtube.com/embed/5K4aFRvrWBc"
          alt="gogo_video"
          width="80%"
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      </div>
      <PDFDocumentWrapper>
        <img src={gogo_banner} alt="gogo_pc_image_1" />
      </PDFDocumentWrapper>
      <PDFDocumentWrapper>
        <img src={tutorial_pc_1} alt="gogo_pc_image_1" />
        <img src={tutorial_pc_2} alt="gogo_pc_image_2" />
        <img src={tutorial_pc_3} alt="gogo_pc_image_3" />
        <img src={tutorial_pc_4} alt="gogo_pc_image_4" />
        <img src={tutorial_pc_5} alt="gogo_pc_image_5" />
        <img src={tutorial_pc_6} alt="gogo_pc_image_6" />
        <img src={tutorial_pc_7} alt="gogo_pc_image_7" />
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
