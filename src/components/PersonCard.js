import React from "react";
import styled from "styled-components";

export default function PersonCard({ path, email, name, engName, position }) {
  return (
    <A href={"mailto:" + email}>
      <Box>
        <ProfileImg src={require(`../assets/images/profile/${path}`)} />
        <TextContainer>
          <Name>{name}</Name>
          <EngName>{engName}</EngName>
          <Position>{position}</Position>
        </TextContainer>
      </Box>
    </A>
  );
}
const A = styled.a`
  text-decoration: none;
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 450px;
  height: 250px;
  padding: 30px;
  box-shadow: 0px 10px 20px #00000040;
  background-color: white;
  border-radius: 30px;
  align-items: flex-start;
  z-index: 10;
  scale: 0.9;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 10px 20px #00000060;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 460px;
    padding: 24px;
  }
`;
const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 90px;
  margin-top: 20px;
  z-index: 20;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    width: 150px;
    height: 150px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  @media screen and (max-width: 768px) {
    align-items: center;
    margin-left: 0px;
  }
`;
const Name = styled.p`
  margin-top: 20px;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 32px;
  color: #484848;
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;
const EngName = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 28px;
  color: #484848;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;
const Position = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 24px;
  color: #484848;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
