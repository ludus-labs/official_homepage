import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterBox>
      <Row style={{ alignItems: "center" }}>
        <Col>
          <Detail>
            <P>
              Illustration by{" "}
              <A href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">
                Icons 8
              </A>{" "}
              from <A href="https://icons8.com/illustrations">Ouch!</A>
            </P>
            <P>서울특별시 성북구 안암로 145, 고려대학교 파이빌 301 & 302호</P>
            <P>대표자명 : 김철수, 정진욱</P>
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
  /* height: 100px; */
  background-color: #f6fafd;
  text-align: center;
  padding: 30px;
  color: whitesmoke;
  /* margin-top: 100px; */
  /* position: absolute;
  bottom: 0; */
`;
const Detail = styled.div`
  text-align: center;
  /* @media screen and (max-width: 992px) {
    text-align: center;
  } */
`;
const P = styled.p`
  color: #4460ff;
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
