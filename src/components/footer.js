import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterBox>
      <Row style={{ alignItems: "center" }}>
        <Col>
          <Detail>
            <P>대표자명 | 정진욱</P>
            <P>주소 | 서울특별시 성북구 안암로 145, 고려대학교 파이빌 305호</P>
            <P>010 2481 8958 · contact@glob-up.com</P>
            {/* <p>COPYRIGHT &copy; 제일법무 all Rights Reserved </p> */}
          </Detail>
        </Col>
        {/* <Col>
          <SocialBox>
            <img src="http://www.lawfirmfirst.com/img/facebook.png" />
            <img src="http://www.lawfirmfirst.com/img/insta.png" />
            <img src="http://www.lawfirmfirst.com/img/twiter.png" />
          </SocialBox>
        </Col> */}
      </Row>
    </FooterBox>
  );
}
const FooterBox = styled.div`
  width: 100%;
  margin-top: 50px;
  /* height: 100px; */
  background-color: #4460ff;
  text-align: center;
  padding: 60px;
  color: whitesmoke;
  /* margin-top: 100px; */
  /* position: absolute;
  bottom: 0; */
  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`;
const Detail = styled.div`
  text-align: center;
  /* @media screen and (max-width: 992px) {
    text-align: center;
  } */
`;
const P = styled.p`
  color: #f6fafd;
  font-size: 12px;
  line-height: 0.8;
  @media screen and (max-width: 768px) {
    font-size: 7px;
  }
`;
const A = styled.a`
  color: #4460ff;
  text-decoration: none;
  &:hover {
    color: #1d2a78;
  }
`;
