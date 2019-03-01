import React from 'react';
// import styled from 'styled-components';
const styled = window.styled;

const HomeButton = () =>
  <StyledHomeTopContainer>    	
    &#127968;
  </StyledHomeTopContainer>

const StyledHomeTopContainer = styled.div`
  align-item: center;
  display: flex;
  font-size: 14px;
  justify-content: center;
`;

export default HomeButton;