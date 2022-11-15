import React, { useState } from "react";
import "./mouseAnimation.css";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";
import syllablee_banner from "../assets/images/banners/syllablee_banner.png";
import gogo_banner from "../assets/images/banners/gogo_banner.png";
import kuplace_banner from "../assets/images/banners/kuplace_banner.png";
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
import team_culture from "../assets/images/team_culture.svg";
import what_is_globup from "../assets/images/what_is_globup.svg";
import PersonCard from "../components/PersonCard";
import { useNavigate } from "react-router-dom";
//just for check..

export default function Home() {
  const navigate = useNavigate();
  const [topInView, setTopInView] = useState(false);
  const [historyInView, setHistoryInView] = useState(false);
  const [dreamInView, setDreamInView] = useState(false);
  const [productListInView, setProductListInView] = useState(false);
  const [cultureInView, setCultureInView] = useState(false);
  const [peopleInView, setPeopleInView] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  const mainImageVisibleAnimation = useSpring({
    config: { duration: 500 },
    delay: 0,
    to: {
      opacity: topInView ? 1 : 0,
    },
  });
  const historyContainerVisibleAnimation = useSpring({
    config: { duration: 500 },
    delay: 0,
    to: {
      opacity: historyInView ? 1 : 0,
      // y: historyInView ? 20 : 0,
    },
  });
  const dreamDivVisibleAnimation = useSpring({
    config: { duration: 500 },
    delay: 0,
    to: {
      opacity: dreamInView ? 1 : 0,
      // y: historyInView ? 20 : 0,
    },
  });
  const productsTextVisibleAnimation = useSpring({
    config: { duration: 500 },
    delay: 0,
    to: {
      opacity: productListInView ? 1 : 0,
    },
  });
  const tumoleVisibleAnimation = useSpring({
    config: { duration: 500 },
    delay: 50,
    from: {
      x: -20,
    },
    to: {
      opacity: productListInView ? 1 : 0,
      x: productListInView ? 0 : -20,
    },
  });
  const desdeSeulVisibleAnimation = useSpring({
    config: { duration: 500 },
    delay: 100,
    from: {
      x: -20,
    },
    to: {
      opacity: productListInView ? 1 : 0,
      x: productListInView ? 0 : -20,
    },
  });
  const tapVisibleAnimation = useSpring({
    config: { duration: 500 },
    delay: 150,
    from: {
      x: -20,
    },
    to: {
      opacity: productListInView ? 1 : 0,
      x: productListInView ? 0 : -20,
    },
  });
  const dimpleVisibleAnimation = useSpring({
    config: { duration: 500 },
    delay: 200,
    from: {
      x: -20,
    },
    to: {
      opacity: productListInView ? 1 : 0,
      x: productListInView ? 0 : -20,
    },
  });
  const challengeonVisibleAnimation = useSpring({
    config: { duration: 500 },
    delay: 250,
    from: {
      x: -20,
    },
    to: {
      opacity: productListInView ? 1 : 0,
      x: productListInView ? 0 : -20,
    },
  });
  const kuplaceVisibleAnimation = useSpring({
    config: { duration: 500 },
    delay: 300,
    from: {
      x: -20,
    },
    to: {
      opacity: productListInView ? 1 : 0,
      x: productListInView ? 0 : -20,
    },
  });
  const gogoVisibleAnimation = useSpring({
    config: { duration: 500 },
    delay: 350,
    from: {
      x: -20,
    },
    to: {
      opacity: productListInView ? 1 : 0,
      x: productListInView ? 0 : -20,
    },
  });
  const syllableeVisibleAnimation = useSpring({
    config: { duration: 500 },
    delay: 400,
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
  const cultureVisibleAnimation = useSpring({
    config: { duration: 500 },
    delay: 0,
    to: {
      opacity: cultureInView ? 1 : 0,
    },
  });

  const peopleVisibleAnimation = useSpring({
    config: { duration: 500 },
    delay: 0,
    to: {
      opacity: peopleInView ? 1 : 0,
    },
  });

  return (
    <>
      <Background>
        <animated.div style={mainImageVisibleAnimation}>
          <Top>
            <Waypoint
              onEnter={() => {
                setTopInView(true);
              }}
            />
            <GogoContainer
              onClick={() => {
                navigate(`/gogo`);
              }}
            >
              <BannerImg1 src={gogo_banner} alt="GOGO" />
            </GogoContainer>
            <SyllableeContainer
              onClick={() => {
                navigate(`/syllablee`);
              }}
            >
              <BannerImg2 src={syllablee_banner} alt="SYLLABLEE" />
            </SyllableeContainer>
            <KuplaceContainer
              onClick={() => {
                navigate(`/kuplace`);
              }}
            >
              <BannerImg1 src={kuplace_banner} alt="KUplace" />
            </KuplaceContainer>
          </Top>
          <MouseContainer>
            <div class="mouse_scroll">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
              <div>
                <span className="m_scroll_arrows unu"></span>
                <span className="m_scroll_arrows doi"></span>
                <span className="m_scroll_arrows trei"></span>
              </div>
            </div>
          </MouseContainer>
        </animated.div>

        <HistoryContainer>
          <animated.div style={historyContainerVisibleAnimation}>
            <HistoryTitle>Local to Global.</HistoryTitle>
            <SloganText>글로벌 스타트업, GLOB-UP</SloganText>
            <LogoContainer>
              <Waypoint
                onEnter={() => {
                  setHistoryInView(true);
                }}
              />
              <MainImage src={globup_icon_logo} />
            </LogoContainer>
          </animated.div>
          <animated.div style={dreamDivVisibleAnimation}>
            <DreamDiv>
              <PivilleImgContainer
                onClick={() => {
                  window.open(
                    "https://piville.kr/team/piville_view.asp?p_idx=270&KeyOrder2=CS01&KeyOrderYear=0"
                  );
                }}
              >
                <Waypoint
                  onEnter={() => {
                    setDreamInView(true);
                  }}
                />
                <PivilleImg src={piville} alt="Pi-Ville" />
              </PivilleImgContainer>
              <DreamTextContainer>
                <DreamTitle>Korea Univ.에서 시작된 꿈</DreamTitle>
                <DreamDescriptionContainer>
                  <DreamDescription>
                    <YearText>- 2022.02:</YearText> 고려대학교 공간정보 공유
                    커뮤니티 서비스 KUplace 런칭
                  </DreamDescription>
                  <DreamDescription>
                    <YearText>- 2022.02:</YearText> 남미 칠레 온라인 세이프
                    딜리버리 서비스 Dimple 런칭
                  </DreamDescription>
                  <DreamDescription>
                    <YearText>- 2022.05:</YearText> 고려대학교 파이빌 입주
                  </DreamDescription>
                  <DreamDescription>
                    <YearText>- 2022.08:</YearText> 대학혁신지원사업 창업동아리
                    지원
                  </DreamDescription>
                  <DreamDescription>
                    <YearText>- 2022.11:</YearText> 링크 KU 창업동아리 지원사업
                    선정
                  </DreamDescription>
                </DreamDescriptionContainer>
              </DreamTextContainer>
            </DreamDiv>
          </animated.div>
        </HistoryContainer>

        <RoadmapContainer>
          <animated.div style={productsTextVisibleAnimation}>
            <TitleText>로드맵</TitleText>
            <ProductTopSubText>실패를 두려워하지 않는 팀</ProductTopSubText>
          </animated.div>
          <ProductListContainer>
            <ProductList>
              <animated.div style={tumoleVisibleAnimation}>
                <ProductBoxLeftContainer
                  marginLeft={isMobile ? "10px" : "60px"}
                >
                  <ProductIconLeft src={tumole_icon} shadowColor="#00000020" />
                  <ProductBoxLeft>
                    <ProductTextContainer>
                      <ProductTitle>TU MOLE</ProductTitle>
                      <ProductDescription>
                        무역 시스템 공유 플랫폼
                      </ProductDescription>
                    </ProductTextContainer>
                  </ProductBoxLeft>
                </ProductBoxLeftContainer>
              </animated.div>
              <animated.div style={desdeSeulVisibleAnimation}>
                <Waypoint
                  onEnter={() => {
                    setProductListInView(true);
                  }}
                />
                <ProductBoxLeftContainer
                  marginLeft={isMobile ? "32px" : "130px"}
                >
                  <ProductIconLeft
                    src={desde_seul_icon}
                    shadowColor="#00000020"
                  />
                  <ProductBoxLeft>
                    <ProductTextContainer>
                      <ProductTitle>Desde Seúl</ProductTitle>
                      <ProductDescription>
                        K-굿즈 남미 쇼핑몰
                      </ProductDescription>
                    </ProductTextContainer>
                  </ProductBoxLeft>
                </ProductBoxLeftContainer>
              </animated.div>
              <animated.div style={tapVisibleAnimation}>
                <ProductBoxLeftContainer marginLeft={isMobile ? "6px" : "40px"}>
                  <ProductIconLeft src={tap_icon} shadowColor="#00000020" />
                  <ProductBoxLeft>
                    <ProductTextContainer>
                      <ProductTitle>TAP</ProductTitle>
                      <ProductDescription>
                        남미 칠레 에이전시 서비스
                      </ProductDescription>
                    </ProductTextContainer>
                  </ProductBoxLeft>
                </ProductBoxLeftContainer>
              </animated.div>
              <animated.div style={dimpleVisibleAnimation}>
                <ProductBoxLeftContainer
                  marginLeft={isMobile ? "22px" : "110px"}
                >
                  <ProductIconLeft src={dimple_icon} shadowColor="#00000020" />
                  <ProductBoxLeft>
                    <ProductTextContainer>
                      <ProductTitle>Dimple</ProductTitle>
                      <ProductDescription>
                        남미 O2O 스마트 배송 서비스 & <br /> 픽업 기반 오픈마켓
                        플랫폼
                      </ProductDescription>
                    </ProductTextContainer>
                  </ProductBoxLeft>
                </ProductBoxLeftContainer>
              </animated.div>
              <animated.div style={challengeonVisibleAnimation}>
                <ProductBoxLeftContainer marginLeft={isMobile ? "8px" : "50px"}>
                  <ProductIconLeft
                    src={challengeon_icon}
                    shadowColor="#00000020"
                  />
                  <ProductBoxLeft>
                    <ProductTextContainer>
                      <ProductTitle>Challenge ON</ProductTitle>
                      <ProductDescription>
                        챌린지 기반 숏폼 영상공유 플랫폼
                      </ProductDescription>
                    </ProductTextContainer>
                  </ProductBoxLeft>
                </ProductBoxLeftContainer>
              </animated.div>
              <animated.div style={kuplaceVisibleAnimation}>
                <ProductBoxLeftNewContainer
                  marginLeft={isMobile ? "30px" : "100px"}
                >
                  <ProductIconLeft src={kuplace_icon} shadowColor="#7644FF80" />
                  <PointerProductBoxLeft
                    onClick={() => {
                      navigate(`/kuplace`);
                    }}
                    bgColor={"#FCE8EB"}
                  >
                    <ProductTextContainer>
                      <ProductTitle>KUplace</ProductTitle>
                      <ProductDescription>
                        고려대학교 공간정보 공유 커뮤니티
                      </ProductDescription>
                    </ProductTextContainer>
                  </PointerProductBoxLeft>
                </ProductBoxLeftNewContainer>
              </animated.div>
              <animated.div style={gogoVisibleAnimation}>
                <ProductBoxLeftNewContainer
                  marginLeft={isMobile ? "0px" : "0px"}
                >
                  <ProductIconLeft
                    src={syllablee_icon}
                    shadowColor="#00000020"
                  />
                  <PointerProductBoxLeft
                    onClick={() => {
                      navigate(`/syllablee`);
                    }}
                    bgColor={"#E2EEEC"}
                  >
                    <ProductTextContainer>
                      <ProductTitle>SYLLABLEE</ProductTitle>
                      <ProductDescription>
                        구독형 학원 마케팅 서비스
                      </ProductDescription>
                    </ProductTextContainer>
                  </PointerProductBoxLeft>
                </ProductBoxLeftNewContainer>
              </animated.div>
              <animated.div style={syllableeVisibleAnimation}>
                <ProductBoxLeftNewContainer
                  marginLeft={isMobile ? "20px" : "70px"}
                >
                  <ProductIconLeft src={gogo_icon} shadowColor="#e9967a80" />
                  <PointerProductBoxLeft
                    onClick={() => {
                      navigate(`/gogo`);
                    }}
                    bgColor={"#FFE8E0"}
                  >
                    <ProductTextContainer>
                      <ProductTitle>ㄱ?(GOGO)</ProductTitle>
                      <ProductDescription>
                        커뮤니케이션 이니시에이터
                      </ProductDescription>
                    </ProductTextContainer>
                  </PointerProductBoxLeft>
                </ProductBoxLeftNewContainer>
              </animated.div>
            </ProductList>
            <animated.div style={lineVisibleAnimation}>
              <Line></Line>
            </animated.div>
          </ProductListContainer>
        </RoadmapContainer>

        <animated.div style={cultureVisibleAnimation}>
          <TeamCultureContainer>
            <TitleText>팀 문화</TitleText>
            <Waypoint
              onEnter={() => {
                setCultureInView(true);
              }}
              // onLeave={() => {
              //   setPeopleInView(false);
              // }}
            />
            <TeamCultureImg src={team_culture} alt="Team Culture" />
          </TeamCultureContainer>
          <WhatIsContainer>
            <WhatIsImg src={what_is_globup} alt="Team Culture" />
          </WhatIsContainer>
        </animated.div>

        <animated.div style={peopleVisibleAnimation}></animated.div>
      </Background>
    </>
  );
}
const Background = styled.div`
  width: 100vw;
  padding-top: 20vh;
  padding-bottom: 20vh;
  padding-left: 5vw;
  padding-right: 5vw;
  background-color: #f6fafd;
  background-size: cover;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  @media screen and (max-width: 768px) {
    padding-top: 100px;
  }
`;
const BannerImg1 = styled.img`
  width: 24vw;
  height: 16vw;
  max-width: 420px;
  max-height: 280px;
  @media screen and (max-width: 768px) {
    width: 50vw;
    height: auto;
    border-radius: 15px;
    margin-right: 0px;
  }
`;
const BannerImg2 = styled.img`
  width: 30vw;
  height: 20vw;
  max-width: 525px;
  max-height: 350px;
  @media screen and (max-width: 768px) {
    width: 50vw;
    height: auto;
    border-radius: 15px;
    margin-right: 0px;
  }
`;
const GogoContainer = styled.div`
  background-color: white;
  width: 24vw;
  height: 16vw;
  max-width: 420px;
  max-height: 280px;
  border-radius: 20px;
  margin-right: 20px;
  box-shadow: 10px 10px 50px #00000015;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    box-shadow: 10px 10px 50px #00000030;
  }
  @media screen and (max-width: 768px) {
    width: 70vw;
    height: 35vw;
    max-width: 10000px;
    max-height: 10000px;
    border-radius: 15px;
    margin-right: 0px;
  }
`;
const SyllableeContainer = styled.div`
  background-color: white;
  width: 30vw;
  height: 20vw;
  max-width: 525px;
  max-height: 350px;
  border-radius: 20px;
  box-shadow: 10px 10px 50px #00000015;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    box-shadow: 10px 10px 50px #00000030;
  }
  @media screen and (max-width: 768px) {
    width: 70vw;
    height: 35vw;
    max-width: 10000px;
    max-height: 10000px;
    margin-top: 10px;
    border-radius: 15px;
  }
`;
const KuplaceContainer = styled.div`
  background-color: white;
  width: 24vw;
  height: 16vw;
  max-width: 420px;
  max-height: 280px;
  border-radius: 20px;
  margin-left: 20px;
  box-shadow: 10px 10px 50px #00000015;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
    box-shadow: 10px 10px 50px #00000030;
  }
  @media screen and (max-width: 768px) {
    width: 70vw;
    height: 35vw;
    max-width: 10000px;
    max-height: 10000px;
    border-radius: 15px;
    margin-top: 10px;
    margin-left: 0px;
  }
`;
const MouseContainer = styled.div`
  /* opacity: 0; */
  margin-top: 10vh;
  margin-bottom: 30vh;
  @media screen and (max-width: 768px) {
    /* opacity: 1; */
    margin-bottom: 20vh;
  }
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    margin-top: 0;
    flex-direction: column;
  }
`;
const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20vh;
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
  font-weight: 500;
  font-size: 40px;
  margin-top: 0px;
  color: #404040;
  @media screen and (max-width: 768px) {
    font-size: 20px;
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
    width: 280px;
  }
`;
const TitleText = styled.p`
  margin-top: 50px;
  margin-bottom: 0;
  font-size: 60px;
  font-weight: 700;
  color: black;
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-top: 45px;
    font-size: 35px;
  }
`;
const ProductTopSubText = styled.p`
  margin-bottom: 0;
  min-width: 150px;
  font-size: 30px;
  font-weight: 500;
  color: #505050;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`;
const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30vh;
  transform: scale(1);
  @media screen and (max-width: 768px) {
    margin-bottom: 20vh;
  }
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
  font-weight: 600;
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
const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 30vh;
`;
const HistoryTitle = styled.p`
  font-size: 70px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;
const DreamDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 30px;
    align-items: center;
  }
`;
const PivilleImgContainer = styled.div`
  width: 60vw;
  max-width: 80vh;
  max-height: 55vh;
  border-radius: 3.5vw;
  overflow: hidden;
  :hover {
    box-shadow: 3px 3px 30px #00000030;
  }
  @media screen and (max-width: 768px) {
    width: 70vw;
    height: 40vw;
    border-radius: 6vw;
  }
`;
const PivilleImg = styled.img`
  width: 80vw;
  transition: transform 0.5s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    transition: transform 0.5s;
  }
  @media screen and (max-width: 768px) {
    width: 70vw;
  }
`;
const DreamTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 40px;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    margin-top: 0px;
    align-items: center;
  }
`;
const DreamTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-top: 0px;
  margin-bottom: 4px;
  color: black;
  text-align: left;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    font-size: 24px;
    text-align: center;
  }
`;
const DreamDescriptionContainer = styled.div`
  text-align: left;
  @media screen and (max-width: 768px) {
    margin-left: 5vw;
    margin-right: 5vw;
  }
`;
const DreamDescription = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: black;
  text-align: left;
  padding-left: 5em;
  text-indent: -5em;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
const YearText = styled.span`
  opacity: 0.5;
`;
const ProductBoxLeftContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  transform: scale(1.2);
  opacity: 0.8;
  margin-left: ${(props) => props.marginLeft};
  @media screen and (max-width: 768px) {
    margin-top: 18px;
    transform: scale(1.05);
  }
`;
const ProductBoxLeftNewContainer = styled(ProductBoxLeftContainer)`
  opacity: 1;
`;
const ProductBoxLeft = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 130px;
  margin-bottom: 0px;
  padding: 0px;
  padding-left: 46px;
  box-shadow: 10px 10px 50px #00000000;
  background: rgba(255, 255, 255, 1);
  border-radius: 20px;
  align-items: center;
  z-index: 10;
  @media screen and (max-width: 768px) {
    padding: 0px;
    padding-left: 32px;
    width: 240px;
    height: 80px;
    align-items: center;
  }
`;
const PointerProductBoxLeft = styled(ProductBoxLeft)`
  cursor: pointer;
  background: white;
  border-width: 5px;
  border-color: ${(props) => props.bgColor};
  &:hover {
    transform: scale(1.02);
    box-shadow: 5px 5px 50px ${(props) => props.bgColor};
  }
`;
const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 20px;
  background: linear-gradient(#4460ff10, #4460ff);
  width: 15px;
  height: 1600px;
  z-index: 0;
  border-radius: 100px;
  transform: translate(-50%);
  @media screen and (max-width: 768px) {
    height: 940px;
  }
`;
const TeamCultureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  @media screen and (max-width: 768px) {
    margin-top: 120px;
  }
`;
const TeamCultureImg = styled.img`
  width: 75vw;
  max-width: 90vh;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;
const WhatIsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
  @media screen and (max-width: 768px) {
    margin-top: 70px;
  }
`;
const WhatIsImg = styled.img`
  width: 75vw;
  max-width: 80vh;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    width: 70vw;
  }
`;
