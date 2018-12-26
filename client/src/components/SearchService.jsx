import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import HomeButton from './buttons/home';

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
          {/* home button */}
          <HomeButton />
        </StyledButton>
        {/* boards dropdown */}
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
  height: 24px;
  padding: 4px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledButton = styled.div`
  background: rgba(255,255,255,.3);
  border-radius: 3px;
  height: 100%;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`

export default SearchService;