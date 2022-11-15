import React from "react";
import styled from "styled-components";

export default function PersonCard({ path, email, name, engName, position }) {
  return (
    <A href={"mailto:" + email}>
      <Box>
        <ProfileImg src={require(`../assets/images/profile/${path}`)} />
        <TextContainer>
          <Name>{name}</Name>
          {/* <EngName>{engName}</EngName> */}
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
  flex-direction: column;
  width: 200px;
  height: 300px;
  padding: 0px;
  box-shadow: 0px 10px 20px #00000010;
  background-color: white;
  border-radius: 0px;
  align-items: flex-start;
  z-index: 10;
  scale: 0.9;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 10px 20px #00000020;
  }
`;
const ProfileImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  z-index: 20;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;
const Name = styled.p`
  margin-top: 10px;
  margin-bottom: 0px;
  font-weight: 700;
  font-size: 28px;
  color: #484848;
`;
const EngName = styled.p`
  margin-top: -5px;
  margin-bottom: 0px;
  font-weight: 700;
  font-size: 25px;
  color: #484848;
`;
const Position = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: 500;
  font-size: 22px;
  color: #484848;
`;
