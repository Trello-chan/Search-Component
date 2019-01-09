import React from 'react';
import styled from 'styled-components';

import BoardImage from './cssImages/board';

const BoardDropdown = (props) =>
  <StyledBoardTopContainer onClick={() => props.changeDisplay('boards')}>
    <div><BoardImage/></div>
    <StyledBoardText>
      Boards
    </StyledBoardText>
  </StyledBoardTopContainer>

const StyledBoardTopContainer = styled.div`
  background: rgba(255,255,255,.3);
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3.5px;
  max-width: 89px;
  min-width: 26px;
  height: 100%;
  &:hover {
    background-color: rgba(210,210,210,.35);
  }
`;

const StyledBoardText = styled.div`
  color: white;
  font-family: Helvetica Neue,Arial,Helvetica,sans-serif;
  font-size: 11.3px;
  font-weight: 700;
  margin-right: 4px;
  margin-bottom: 1px;
  padding: 2px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export default BoardDropdown;