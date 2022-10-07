import React from "react";
import styled from "styled-components";

export default function PersonCard({
  id,
  email,
  name,
  engName,
  position,
  description,
}) {
  return (
    <A href={"mailto:" + email}>
      <Box>
        <ProfileImg src={require(`../assets/images/profile/${id}.png`)} />
        <Name>{name}</Name>
        <EngName>{engName}</EngName>
        <Position>{position}</Position>
        <Description>{description}</Description>
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
  width: 80px;
  height: 80px;
  border-radius: 40px;
  z-index: 20;
  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
const Name = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 20px;
  color: #484848;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const EngName = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 18px;
  color: #484848;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Position = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 14px;
  color: #484848;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
const Description = styled.p`
  margin-top: 25px;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 12px;
  color: #606060;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
