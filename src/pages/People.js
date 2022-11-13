import PersonCard from "../components/PersonCard";
import styled from "styled-components";
const People = () => {
  return (
    <Background>
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
              position="CTO"
            />
            <PersonCard
              path="2.jpg"
              email="contact@glob-up.com"
              name="강유민"
              engName="Aiden Kang"
              position="개발 / 디자인"
            />
            <PersonCard
              path="3.jpg"
              email="contact@glob-up.com"
              name="박성준"
              engName="Dominick Park"
              position="기획"
            />
            <PersonCard
              path="4.jpg"
              email="contact@glob-up.com"
              name="박재현"
              engName="Hazel Park"
              position="기획"
              description=<p>-고려대학교 경영학과 재학</p>
            />
            <PersonCard
              path="5.jpg"
              email="contact@glob-up.com"
              name="심하민"
              engName="Zoe Shim"
              position="개발"
            />
            <PersonCard
              path="6.jpeg"
              email="contact@glob-up.com"
              name="윤재원"
              engName="Jay Youn"
              position="개발"
            />
          </PersonBoxContainer>
        </PersonBoxScroll>
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
  background-color: #4460ff;
  scale: 0.9;
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

export default People;
