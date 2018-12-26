import React from 'react';
import styled from 'styled-components';

const HomeButton = () =>
  <StyledHomeTopContainer>
    <StyledHomeBody/>
    <StyledHomeDoor/>
    <StyledRoofContainer>
      <StyledRoofLeft/>
      <StyledRoofRight/>
    </StyledRoofContainer>
  </StyledHomeTopContainer>

const StyledHomeTopContainer = styled.div`
  height: 16px;
  width: 16px;
  position: relative;
`;

const StyledRoofContainer = styled.div`
  width: 80%;
  height: 80%;
  position: absolute;
  left: 40%;
  margin-left: -30%;
  top: 10%;
  transform: rotate(45deg); 
  overflow: hidden;
`;

const StyledRoofLeft = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: white;
  left: -90%;
`;

const StyledRoofRight = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: white;
  top: -90%;
  transform: rotate(90deg); 
`;

const StyledHomeBody = styled.div`
  border-radius: 1px;
  width: 55%;
  height: 50%;
  position: absolute;
  left: 45%;
  bottom: 0%;
  margin-left: -30%;
  border: 1.5px solid white;
  background-color: rgba(255,255,255,0.05);
`;

const StyledHomeDoor = styled.div`
  width: 16%;
  height: 30%;
  position: absolute;
  left: 45%;
  margin-left: -11%;
  bottom: 0%;
  border-radius: 15%;
  border: 1.5px solid white;
  overflow: hidden;
`;

export default HomeButton;