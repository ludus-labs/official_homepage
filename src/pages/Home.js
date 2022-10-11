import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";
import main_image from "../assets/images/main_image.png";
import gogo_icon from "../assets/images/icon/gogo_icon.png";
import globup_icon from "../assets/images/icon/globup_icon.png";
import kuplace_icon from "../assets/images/icon/kuplace_icon.png";
import PersonCard from "../components/PersonCard";
//just for check..

export default function Home() {
  const [topInView, setTopInView] = useState(false);
  const [productListInView, setProductListInView] = useState(false);
  const [peopleInView, setPeopleInView] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  const sloganContainerVisibleAnimation = useSpring({
    config: { duration: 600 },
    delay: 0,
    to: {
      opacity: topInView ? 1 : 0,
      y: topInView ? 20 : 0,
    },
  });
  const mainImageVisibleAnimation = useSpring({
    config: { duration: 800 },
    delay: 0,
    to: {
      opacity: topInView ? 1 : 0,
    },
  });
  const productsTextVisibleAnimation = useSpring({
    config: { duration: 600 },
    delay: 0,
    to: {
      opacity: productListInView ? 1 : 0,
    },
  });
  const gogoVisibleAnimation = useSpring({
    config: { duration: 600 },
    delay: 100,
    from: {
      x: -20,
    },
    to: {
      opacity: productListInView ? 1 : 0,
      x: productListInView ? 0 : -20,
    },
  });
  const challengeonVisibleAnimation = useSpring({
    config: { duration: 600 },
    delay: 300,
    from: {
      x: -20,
    },
    to: {
      opacity: productListInView ? 1 : 0,
      x: productListInView ? 0 : -20,
    },
  });
  const kuplaceVisibleAnimation = useSpring({
    config: { duration: 600 },
    delay: 500,
    from: {
      x: -20,
    },
    to: {
      opacity: productListInView ? 1 : 0,
      x: productListInView ? 0 : -20,
    },
  });
  const peopleVisibleAnimation = useSpring({
    config: { duration: 800 },
    delay: 0,
    to: {
      opacity: peopleInView ? 1 : 0,
    },
  });

  return (
    <>
      <Background>
        <Top>
          <animated.div style={sloganContainerVisibleAnimation}>
            <SloganContainer>
              <SloganText>
                Enjoy.
                <br />
                Be colorful.
              </SloganText>
              <SloganSubtext>우리의 일상을 더욱 다채롭게</SloganSubtext>
            </SloganContainer>
          </animated.div>
          <animated.div style={mainImageVisibleAnimation}>
            <MainImage src={main_image} />
          </animated.div>
        </Top>
        <Waypoint
          onEnter={() => {
            setTopInView(true);
          }}
          onLeave={() => {
            setTopInView(false);
          }}
        />
        <animated.div style={productsTextVisibleAnimation}>
          <ProductTopText>Products</ProductTopText>
        </animated.div>
        <ProductListContainer>
          <ProductList>
            <animated.div style={gogoVisibleAnimation}>
              <ProductBoxLeftContainer marginLeft={isMobile ? "-30px" : "0px"}>
                <ProductIconLeft src={gogo_icon} shadowColor="#e9967a80" />
                <ProductBoxLeft>
                  <ProductTextContainer>
                    <ProductTitle>ㄱ?(Gogo)</ProductTitle>
                    <ProductDescription>
                      MZ를 위한 심플한 메신저
                    </ProductDescription>
                    <MoreButton>
                      <MoreButtonText>다운로드</MoreButtonText>
                    </MoreButton>
                  </ProductTextContainer>
                </ProductBoxLeft>
              </ProductBoxLeftContainer>
            </animated.div>
            <animated.div style={challengeonVisibleAnimation}>
              <ProductBoxLeftContainer marginLeft={isMobile ? "20px" : "160px"}>
                <ProductIconLeft src={globup_icon} shadowColor="#4460ff80" />
                <ProductBoxLeft>
                  <ProductTextContainer>
                    <ProductTitle>Challenge ON</ProductTitle>
                    <ProductDescription>
                      E2E. Entertain to Earn.
                    </ProductDescription>
                    <MoreButton>
                      <MoreButtonText>다운로드</MoreButtonText>
                    </MoreButton>
                  </ProductTextContainer>
                </ProductBoxLeft>
              </ProductBoxLeftContainer>
            </animated.div>
            <Waypoint
              onEnter={() => {
                setProductListInView(true);
              }}
              onLeave={() => {
                setProductListInView(false);
              }}
            />
            <animated.div style={kuplaceVisibleAnimation}>
              <ProductBoxLeftContainer marginLeft={isMobile ? "-5px" : "60px"}>
                <ProductIconLeft src={kuplace_icon} shadowColor="#7644FF80" />
                <ProductBoxLeft>
                  <ProductTextContainer>
                    <ProductTitle>KUplace</ProductTitle>
                    <ProductDescription>
                      고려대학교 공간정보 공유 커뮤니티
                    </ProductDescription>
                    <MoreButton>
                      <MoreButtonText
                        onClick={() => {
                          window.open("https://kuplace.page.link/promotion");
                        }}
                      >
                        다운로드
                      </MoreButtonText>
                    </MoreButton>
                  </ProductTextContainer>
                </ProductBoxLeft>
              </ProductBoxLeftContainer>
            </animated.div>
          </ProductList>
        </ProductListContainer>

        <animated.div style={peopleVisibleAnimation}>
          <PeopleContainer>
            <PeopleTitle>저희를 소개합니다</PeopleTitle>
            <PersonBoxScroll>
              <PersonBoxContainer>
                <PersonCard
                  path="0.jpeg"
                  email="contact@glob-up.com"
                  name="김철수"
                  engName="Charles Kim"
                  position="CEO"
                />
                <PersonCard
                  path="0.png"
                  email="contact@glob-up.com"
                  name="정진욱"
                  engName="Jarvis Jeong"
                  position="CEO"
                />
                <PersonCard
                  path="2.jpg"
                  email="contact@glob-up.com"
                  name="강유민"
                  engName="Aiden Kang"
                  position="Co-founder"
                />
                <PersonCard
                  path="3.jpg"
                  email="contact@glob-up.com"
                  name="박성준"
                  engName="Dominick Park"
                  position="Co-founder"
                />
                <PersonCard
                  path="0.png"
                  email="contact@glob-up.com"
                  name="박재현"
                  engName="Hazel Park"
                  position="Co-founder"
                  description=<p>-고려대학교 경영학과 재학</p>
                />
                <PersonCard
                  path="5.jpg"
                  email="contact@glob-up.com"
                  name="심하민"
                  engName="Zoe Shim"
                  position="Co-founder"
                />
                <PersonCard
                  path="6.jpeg"
                  email="contact@glob-up.com"
                  name="윤재원"
                  engName="Jay Youn"
                  position="Co-founder"
                />
                <PersonCard
                  path="0.png"
                  email="contact@glob-up.com"
                  name="정채민"
                  engName="Brian Jung"
                  position="Co-founder"
                />
              </PersonBoxContainer>
              <Waypoint
                onEnter={() => {
                  setPeopleInView(true);
                }}
                onLeave={() => {
                  setPeopleInView(false);
                }}
              />
            </PersonBoxScroll>
          </PeopleContainer>
        </animated.div>
      </Background>
    </>
  );
}
const Background = styled.div`
  width: 100vw;
  padding-top: 40vh;
  padding-bottom: 20vh;
  padding-left: 10vw;
  padding-right: 10vw;
  background: #f6fafd;
  background-size: cover;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  @media screen and (max-width: 768px) {
    padding-top: 20vh;
  }
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const SloganContainer = styled.div`
  display: flex;
  margin-left: 10vw;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;
const SloganText = styled.p`
  font-weight: 900;
  font-size: 60px;
  line-height: 1.3;
  @media screen and (max-width: 768px) {
    font-size: 40px;
    text-align: center;
  }
`;
const SloganSubtext = styled.p`
  font-weight: 400;
  font-size: 25px;
  color: #484848;
  margin-top: 5px;
  line-height: 1.3;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    text-align: center;
  }
`;
const MainImage = styled.img`
  margin-left: 30px;
  width: 300px;
  @media screen and (max-width: 768px) {
    margin-left: 10vw;
    margin-top: 30px;
    width: 200px;
  }
`;
const ProductTopText = styled.p`
  margin-top: 300px;
  margin-bottom: 0;
  font-size: 35px;
  font-weight: 700;
  color: black;
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-top: 100px;
    font-size: 30px;
  }
`;
const ProductListContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ProductList = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;
const ProductBoxLeftContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-left: ${(props) => props.marginLeft};
`;
const ProductIconLeft = styled.img`
  position: relative;
  left: 40px;
  top: 30px;
  width: 70px;
  height: 70px;
  border-radius: 12px;
  box-shadow: 3px 3px 15px ${(props) => props.shadowColor};
  z-index: 20;
  @media screen and (max-width: 768px) {
    left: 25px;
    top: 15px;
    width: 50px;
    height: 50px;
  }
`;
const ProductBoxLeft = styled.div`
  display: flex;
  flex-direction: row;
  width: 350px;
  height: 180px;
  margin-bottom: 30px;
  padding: 40px;
  padding-left: 43px;
  box-shadow: 10px 10px 50px #00000015;
  background-color: white;
  border-radius: 20px;
  z-index: 10;
  &:hover {
    transform: scale(1.02);
    box-shadow: 10px 10px 50px #00000030;
  }
  @media screen and (max-width: 768px) {
    padding: 30px;
    width: 250px;
    height: 150px;
  }
`;
const ProductTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    margin-left: 5px;
  }
`;
const ProductTitle = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 24px;
  font-weight: 500;
  color: black;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
const ProductDescription = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  color: #484848;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const MoreButton = styled.button`
  display: flex;
  width: 100px;
  height: 30px;
  margin-top: 10px;
  border-radius: 500px;
  background-color: #4460ff;
  color: #ffffff;
  border-width: 0px;
  justify-content: center;
  align-items: center;
  &:hover {
    box-shadow: 5px 5px 30px #4460ff30;
  }
  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;
const MoreButtonText = styled.p`
  display: inline-block;
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 15px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
const PeopleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-top: 300px;
  margin-left: 10vw;
  margin-right: 10vw;
  padding-bottom: 10px;
  border-radius: 25px;
  background-color: #4460ff;
  @media screen and (max-width: 768px) {
    margin-top: 100px;
    margin-left: 0;
    margin-right: 0;
  }
`;
const PeopleTitle = styled.p`
  margin-top: 30px;
  margin-left: 40px;
  font-size: 25px;
  font-weight: 700;
  color: white;
`;
const PersonBoxScroll = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;
const PersonBoxContainer = styled.div`
  width: fit-content;
  padding-top: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
`;
