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
`

export default BoardDropdown;