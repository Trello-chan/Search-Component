import React, { Component } from 'react';
import styled from 'styled-components';

import BoardImage from './cssImages/board';

class BoardDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <StyledBoardTopContainer>
        <BoardImage/>
        <StyledBoardText>
          Boards
        </StyledBoardText>
      </StyledBoardTopContainer>
    )
  }
}

const StyledBoardTopContainer = styled.div`
  background: rgba(255,255,255,.3);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3.5px;
  max-width: 89px;
  min-width: 26px;
  height: 100%;
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