import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import HomeButton from './cssImages/home';
import BoardsDropdown from './BoardsDropdown';

class SearchService extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <StyledSearchComponent>
        <GlobalStyle />
        <StyledButton>
          <HomeButton />
        </StyledButton>
        <BoardsDropdown />
        {/* cards/board search */}
        {/* trello-chan logo */}
        <StyledButton>
          {/* create button */}
        </StyledButton>
        <StyledButton>
          {/* info button */}
        </StyledButton>
        {/* notifications button */}
        {/* member logo */}
      </StyledSearchComponent>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0px;
  }
`

const StyledSearchComponent = styled.div`
  background: rgba(0,0,0,.35);
  height: 26px;
  padding: 3px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledButton = styled.div`
  background: rgba(255,255,255,.3);
  border-radius: 3px;
  height: 100%;
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3px;
  &:hover {
    background-color: rgba(150,150,150,.35);
  }
`

export default SearchService;