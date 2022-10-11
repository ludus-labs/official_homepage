import React from "react";
import styled from "styled-components";

export default function PersonCard({ path, email, name, engName, position }) {
  return (
    <A href={"mailto:" + email}>
      <Box>
        <ProfileImg src={require(`../assets/images/profile/${path}`)} />
        <Name>{name}</Name>
        <EngName>{engName}</EngName>
        <Position>{position}</Position>
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
  margin-right: 20px;
  width: 200px;
  height: 300px;
  padding: 20px;
  box-shadow: 0px 10px 20px #00000040;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  z-index: 10;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 10px 20px #00000060;
  }
  @media screen and (max-width: 768px) {
    width: 160px;
    height: 240px;
    padding: 12px;
  }
`;
const ProfileImg = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  margin-top: 30px;
  z-index: 20;
  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;
const Name = styled.p`
  margin-top: 5px;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 20px;
  color: #484848;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
const EngName = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 18px;
  color: #484848;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Position = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 15px;
  color: #484848;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
