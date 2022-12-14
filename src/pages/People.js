import PersonCard from "../components/PersonCard";
import styled from "styled-components";
const People = () => {
  return (
    <Background>
      <PeopleContainer>
        <PeopleTitle>저희를 소개합니다</PeopleTitle>
        <PersonBoxContainer>
          <PersonCard
            path="0.jpg"
            email="contact@glob-up.com"
            name="김철수"
            engName="Charles Kim"
            position="CEO"
            school="고려대학교 경영학과"
          />
          <PersonCard
            path="1.jpg"
            email="contact@glob-up.com"
            name="정진욱"
            engName="Jarvis Jeong"
            position="CTO"
            school="고려대학교 전기전자공학부"
          />
          <PersonCard
            path="2.jpg"
            email="contact@glob-up.com"
            name="강유민"
            engName="Aiden Kang"
            position="개발 / 디자인"
            school="고려대학교 건축학과"
          />
          <PersonCard
            path="3.jpg"
            email="contact@glob-up.com"
            name="박성준"
            engName="Dominick Park"
            position="기획"
            school="고려대학교 경영학과"
          />
          <PersonCard
            path="4.jpg"
            email="contact@glob-up.com"
            name="박재현"
            engName="Hazel Park"
            position="기획"
            school="고려대학교 경영학과"
          />
          <PersonCard
            path="5.jpg"
            email="contact@glob-up.com"
            name="심하민"
            engName="Zoe Shim"
            position="개발"
            school="고려대학교 전기전자공학부"
          />
          <PersonCard
            path="6.jpeg"
            email="contact@glob-up.com"
            name="윤재원"
            engName="Jay Youn"
            position="개발"
            school="고려대학교 전기전자공학부"
          />
          <PersonCard
            path="7.png"
            email="contact@glob-up.com"
            name="황진우"
            engName=""
            position="B2G 담당"
            school="고려대학교 행정학과"
          />
        </PersonBoxContainer>
      </PeopleContainer>
    </Background>
  );
};

const Background = styled.div`
  background-color: #f6fafd;
  padding-top: 100px;
  padding-bottom: 100px;
`;
const PeopleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding-bottom: 10px;
  border-radius: 25px;
  align-items: center;
  scale: 1;
`;
const PeopleTitle = styled.p`
  margin-top: 0px;
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 700;
  color: #4460ff;
  @media screen and (max-width: 620px) {
    font-size: 30px;
  }
`;
const PersonBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1fr;
  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 620px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default People;
