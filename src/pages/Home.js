import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";
import globup_icon_logo from "../assets/images/globup_icon_logo.png";
import syllablee_icon from "../assets/images/icon/syllablee_icon.png";
import syllablee_text_icon from "../assets/images/icon/syllablee_text_icon.png";
import gogo_icon from "../assets/images/icon/gogo_icon.png";
import kuplace_icon from "../assets/images/icon/kuplace_icon.png";
import challengeon_icon from "../assets/images/icon/challengeon_icon.png";
import dimple_icon from "../assets/images/icon/dimple_icon.png";
import desde_seul_icon from "../assets/images/icon/desde_seul_icon.png";
import tap_icon from "../assets/images/icon/tap_icon.png";
import tumole_icon from "../assets/images/icon/tumole_icon.png";
import piville from "../assets/images/piville.jpg";
import PersonCard from "../components/PersonCard";
import { useNavigate } from "react-router-dom";
//just for check..

export default function Home() {
  const navigate = useNavigate();
  const [topInView, setTopInView] = useState(false);
  const [historyInView, setHistoryInView] = useState(false);
  const [productListInView, setProductListInView] = useState(false);
  const [peopleInView, setPeopleInView] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  const mainImageVisibleAnimation = useSpring({
    config: { duration: 800 },
    delay: 0,
    to: {
      opacity: topInView ? 1 : 0,
    },
  });
  const historyContainerVisibleAnimation = useSpring({
    config: { duration: 600 },
    delay: 0,
    to: {
      opacity: historyInView ? 1 : 0,
      // y: historyInView ? 20 : 0,
    },
  });
  const pivilleImgSizeAnimation = useSpring({
    config: { duration: 600 },
    delay: 0,
    to: {
      scale: historyInView ? 1.1 : 1,
    },
  });
  const productsTextVisibleAnimation = useSpring({
    config: { duration: 600 },
    delay: 0,
    to: {
      opacity: productListInView ? 1 : 0,
    },
  });
  const tumoleVisibleAnimation = useSpring({
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
  const desdeSeulVisibleAnimation = useSpring({
    config: { duration: 600 },
    delay: 200,
    from: {
      x: -20,
    },
    to: {
      opacity: productListInView ? 1 : 0,
      x: productListInView ? 0 : -20,
    },
  });
  const tapVisibleAnimation = useSpring({
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
  const dimpleVisibleAnimation = useSpring({
    config: { duration: 600 },
    delay: 400,
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
    delay: 500,
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
    delay: 600,
    from: {
      x: -20,
    },
    to: {
      opacity: productListInView ? 1 : 0,
      x: productListInView ? 0 : -20,
    },
  });
  const gogoVisibleAnimation = useSpring({
    config: { duration: 600 },
    delay: 700,
    from: {
      x: -20,
    },
    to: {
      opacity: productListInView ? 1 : 0,
      x: productListInView ? 0 : -20,
    },
  });
  const syllableeVisibleAnimation = useSpring({
    config: { duration: 600 },
    delay: 800,
    from: {
      x: -20,
    },
    to: {
      opacity: productListInView ? 1 : 0,
      x: productListInView ? 0 : -20,
    },
  });
  const lineVisibleAnimation = useSpring({
    config: { duration: 300 },
    delay: 0,
    to: {
      opacity: productListInView ? 1 : 0,
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
          <animated.div style={mainImageVisibleAnimation}>
            <MainImage src={globup_icon_logo} />
          </animated.div>
        </Top>
        <Waypoint
          topOffset="50px"
          onEnter={() => {
            setTopInView(true);
          }}
          onLeave={() => {
            setTopInView(false);
          }}
        />

        <animated.div style={historyContainerVisibleAnimation}>
          <HistoryContainer>
            <HistoryTitle>세상에 우리 존재를 알리기까지...</HistoryTitle>
            <DreamDiv>
              <div
                style={{
                  width: "50vw",
                  height: "40vw",
                  borderRadius: "4vw",
                  overflow: "hidden",
                }}
              >
                <animated.div style={pivilleImgSizeAnimation}>
                  <PivilleImg src={piville} alt="Pi-Ville" />
                </animated.div>
              </div>
              <DreamTitle>Korea Univ.에서 시작된 꿈</DreamTitle>
            </DreamDiv>
          </HistoryContainer>
        </animated.div>

        <Waypoint
          onEnter={() => {
            setHistoryInView(true);
          }}
        />
        <RoadmapContainer>
          <animated.div style={productsTextVisibleAnimation}>
            <ProductTopText>로드맵</ProductTopText>
            <ProductTopSubText>실패를 두려워하지 않는 팀</ProductTopSubText>
          </animated.div>
          <ProductListContainer>
            <ProductList>
              <animated.div style={tumoleVisibleAnimation}>
                <ProductBoxOldLeftContainer
                  marginLeft={isMobile ? "10px" : "60px"}
                >
                  <ProductIconOldLeft
                    src={tumole_icon}
                    shadowColor="#00000020"
                  />
                  <ProductBoxOldLeft>
                    <ProductTextContainer>
                      <ProductTitle>TU MOLE</ProductTitle>
                      <ProductDescription>
                        무역 시스템 공유 플랫폼
                      </ProductDescription>
                    </ProductTextContainer>
                  </ProductBoxOldLeft>
                </ProductBoxOldLeftContainer>
              </animated.div>
              <animated.div style={desdeSeulVisibleAnimation}>
                <ProductBoxOldLeftContainer
                  marginLeft={isMobile ? "32px" : "130px"}
                >
                  <ProductIconOldLeft
                    src={desde_seul_icon}
                    shadowColor="#00000020"
                  />
                  <ProductBoxOldLeft>
                    <ProductTextContainer>
                      <ProductTitle>Desde Seúl</ProductTitle>
                      <ProductDescription>
                        K-굿즈 남미 쇼핑몰
                      </ProductDescription>
                    </ProductTextContainer>
                  </ProductBoxOldLeft>
                </ProductBoxOldLeftContainer>
              </animated.div>
              <animated.div style={tapVisibleAnimation}>
                <ProductBoxOldLeftContainer
                  marginLeft={isMobile ? "6px" : "40px"}
                >
                  <ProductIconOldLeft src={tap_icon} shadowColor="#00000020" />
                  <ProductBoxOldLeft>
                    <ProductTextContainer>
                      <ProductTitle>TAP</ProductTitle>
                      <ProductDescription>
                        남미 칠레 에이전시 서비스
                      </ProductDescription>
                    </ProductTextContainer>
                  </ProductBoxOldLeft>
                </ProductBoxOldLeftContainer>
              </animated.div>
              <animated.div style={dimpleVisibleAnimation}>
                <ProductBoxOldLeftContainer
                  marginLeft={isMobile ? "22px" : "110px"}
                >
                  <ProductIconOldLeft
                    src={dimple_icon}
                    shadowColor="#00000020"
                  />
                  <ProductBoxOldLeft>
                    <ProductTextContainer>
                      <ProductTitle>Dimple</ProductTitle>
                      <ProductDescriptionOld>
                        남미 O2O 스마트 배송 서비스 & <br /> 픽업 기반 오픈마켓
                        플랫폼
                      </ProductDescriptionOld>
                    </ProductTextContainer>
                  </ProductBoxOldLeft>
                </ProductBoxOldLeftContainer>
              </animated.div>
              <Waypoint
                onEnter={() => {
                  setProductListInView(true);
                }}
              />
              <animated.div style={challengeonVisibleAnimation}>
                <ProductBoxOldLeftContainer
                  marginLeft={isMobile ? "8px" : "50px"}
                >
                  <ProductIconOldLeft
                    src={challengeon_icon}
                    shadowColor="#00000020"
                  />
                  <ProductBoxOldLeft>
                    <ProductTextContainer>
                      <ProductTitle>Challenge ON</ProductTitle>
                      <ProductDescription>
                        챌린지 기반 숏폼 영상공유 플랫폼
                      </ProductDescription>
                    </ProductTextContainer>
                  </ProductBoxOldLeft>
                </ProductBoxOldLeftContainer>
              </animated.div>
              <animated.div style={kuplaceVisibleAnimation}>
                <ProductBoxLeftContainer
                  marginLeft={isMobile ? "30px" : "100px"}
                >
                  <ProductIconLeft src={kuplace_icon} shadowColor="#7644FF80" />
                  <ProductBoxLeft
                    onClick={() => {
                      navigate(`/kuplace`);
                    }}
                  >
                    <ProductTextContainer>
                      <ProductTitle>KUplace</ProductTitle>
                      <ProductDescription>
                        고려대학교 공간정보 공유 커뮤니티
                      </ProductDescription>
                      <MoreButton>
                        <MoreButtonText
                          onClick={() => {
                            navigate(`/kuplace`);
                          }}
                        >
                          →
                        </MoreButtonText>
                      </MoreButton>
                    </ProductTextContainer>
                  </ProductBoxLeft>
                </ProductBoxLeftContainer>
              </animated.div>
              <animated.div style={gogoVisibleAnimation}>
                <ProductBoxLeftContainer marginLeft={isMobile ? "0px" : "0px"}>
                  <ProductIconLeft src={gogo_icon} shadowColor="#e9967a80" />
                  <ProductBoxLeft
                    onClick={() => {
                      navigate(`/gogo`);
                    }}
                  >
                    <ProductTextContainer>
                      <ProductTitle>ㄱ?(GOGO)</ProductTitle>
                      <ProductDescription>
                        커뮤니케이션 이니시에이터
                      </ProductDescription>
                      <MoreButton>
                        <MoreButtonText
                          onClick={() => {
                            navigate(`/gogo`);
                          }}
                        >
                          →
                        </MoreButtonText>
                      </MoreButton>
                    </ProductTextContainer>
                  </ProductBoxLeft>
                </ProductBoxLeftContainer>
              </animated.div>
              <animated.div style={syllableeVisibleAnimation}>
                <ProductBoxLeftContainer
                  marginLeft={isMobile ? "20px" : "70px"}
                >
                  <ProductIconLeft
                    src={syllablee_icon}
                    shadowColor="#00000020"
                  />
                  <ProductBoxLeft
                    onClick={() => {
                      navigate(`/syllablee`);
                    }}
                  >
                    <ProductTextContainer>
                      <ProductTitle>SYLLABLEE</ProductTitle>
                      <ProductDescription>
                        구독형 학원 마케팅 서비스
                      </ProductDescription>
                      <MoreButton>
                        <MoreButtonText
                          onClick={() => {
                            navigate(`/syllablee`);
                          }}
                        >
                          →
                        </MoreButtonText>
                      </MoreButton>
                    </ProductTextContainer>
                  </ProductBoxLeft>
                </ProductBoxLeftContainer>
              </animated.div>
            </ProductList>
            <animated.div style={lineVisibleAnimation}>
              <Line></Line>
            </animated.div>
          </ProductListContainer>
        </RoadmapContainer>

        <animated.div style={peopleVisibleAnimation}>
          <PeopleContainer>
            <PeopleTitle>저희를 소개합니다</PeopleTitle>
            <PersonBoxScroll>
              <PersonBoxContainer>
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
                  path="0.jpeg"
                  email="contact@glob-up.com"
                  name="김철수"
                  engName="Charles Kim"
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
                  path="4.jpg"
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
  padding-top: 20vh;
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
  width: 400px;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    width: 320px;
  }
`;
const ProductTopText = styled.p`
  margin-top: 100px;
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
const ProductTopSubText = styled.p`
  margin-bottom: 0;
  min-width: 150px;
  font-size: 20px;
  font-weight: 500;
  color: #505050;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`;
const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
  transform: scale(0.8);
`;
const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProductList = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  z-index: 100;
`;
const ProductBoxLeftContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  margin-left: ${(props) => props.marginLeft};
  transform: scale(0.9);
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
    top: 30px;
    width: 50px;
    height: 50px;
  }
`;
const ProductIconOldLeft = styled.img`
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
  width: 300px;
  height: 180px;
  margin-top: 10px;
  margin-bottom: 0px;
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
    padding: 0px;
    padding-top: 20px;
    padding-left: 32px;
    width: 240px;
    height: 120px;
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
const ProductDescriptionOld = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  color: #484848;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const MoreButton = styled.button`
  display: flex;
  width: 60px;
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
    width: 50px;
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
const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 300px;
`;
const HistoryTitle = styled.p`
  font-size: 35px;
  font-weight: 700;
`;
const DreamDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
`;
const PivilleImg = styled.img`
  width: 60vw;
`;
const DreamTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
`;
const ProductBoxOldLeftContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  transform: scale(0.9);
  margin-left: ${(props) => props.marginLeft};
`;
const ProductBoxOldLeft = styled.div`
  display: flex;
  flex-direction: row;
  width: 280px;
  height: 130px;
  margin-bottom: 0px;
  padding: 28px;
  padding-left: 43px;
  box-shadow: 10px 10px 50px #00000015;
  background-color: white;
  border-radius: 20px;
  z-index: 10;
  @media screen and (max-width: 768px) {
    padding: 0px;
    padding-top: 15px;
    padding-left: 32px;
    width: 240px;
    height: 80px;
  }
`;
const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  background: linear-gradient(#4460ff10, #4460ff);
  width: 15px;
  height: 1380px;
  z-index: 0;
  border-radius: 100px;
  transform: translate(100px);
  @media screen and (max-width: 768px) {
    height: 950px;
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
