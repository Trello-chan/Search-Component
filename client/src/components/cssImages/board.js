import React from 'react';
// import styled from 'styled-components';
const styled = window.styled;

const BoardImage = () =>
  <StyledBoardTopContainer>
    <StyledBoardColumnLeft/>
    <StyledBoardColumnRight/>
  </StyledBoardTopContainer>

const StyledBoardTopContainer = styled.div`
  display: flex;
  height: 14px;
  width: 14px;
  background-color: rgba(255,255,255,0.05);
  border: 1.5px solid white;
  border-radius: 2px;
  margin: 6px;
`;

const StyledBoardColumnLeft = styled.div`
  height: 90%;
  width: 50%;
  border-bottom: 2px solid white;
`;

const StyledBoardColumnRight = styled.div`
  border-left: 1.5px solid white;
  border-bottom: 5px solid white;
  display: flex;
  flex-direction: column;
  height: 65%;
  width: 50%;
`;

export default BoardImage;