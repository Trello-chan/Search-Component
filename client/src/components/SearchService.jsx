import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';

import HomeButton from './cssImages/home';
import BoardImage from './cssImages/board';
import BoardsDropdown from './BoardsDropdown';
import BoardsDropdownDrawer from './BoardsDropdownDrawer';
import Search from './Search/Search';

class SearchService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOptions: false,
      userData: {}
    }
  }

  componentDidMount() {
    this.fetchLoadData();
  }

  changeDisplay = () => {
    this.setState({ displayOptions: !this.state.displayOptions})
  }

  fetchLoadData = () => {
    let id = Math.ceil(Math.random() * 100);
    axios
      .get(`/api/load?id=${id}`)
      .then(({ data }) => this.setState({ userData: data }, () => console.log(data)))
      .catch(err => console.error(err));
  }

  render() {
    let { displayOptions } = this.state;
    let { boards } = this.state.userData;
    return (
      <StyledSearchComponent>
        <GlobalStyle />
        <StyledButton>
          <HomeButton />
        </StyledButton>

        <BoardsDropdown changeDisplay={this.changeDisplay}/>

        <Search />

        <LogoContainer>
          <div>
            <BoardImage/>
            <div>Trello-chan</div>
          </div>
        </LogoContainer>

        <RightSideContainer>

        <StyledButton>
          {/* create button */}
          +
        </StyledButton>
        <StyledButton>
          {/* info button */}
        </StyledButton>
        <StyledButton>
          {/* notifications button */}
        </StyledButton>
        {/* member logo */}
        </RightSideContainer>
        {displayOptions && <BoardsDropdownDrawer boards={boards}/>}
      </StyledSearchComponent>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    background: blue;
    height: 100vh;
    margin: 0px;
  }
`

const StyledSearchComponent = styled.div`
  background: rgba(0,0,0,.35);
  height: 26px;
  padding: 3px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledButton = styled.div`
  background: rgba(255,255,255,.3);
  border-radius: 3px;
  cursor: pointer;
  height: 100%;
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3px;
  &:hover {
    background-color: rgba(210,210,210,.35);
  }
`;

const LogoContainer = styled.div`
  width: 35%;
  > :nth-child(1) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    width: 100%;
    color: white;
    > :nth-child(1){
      height: 13px;
      width: 12px;
    }
    > :nth-child(2) {
      font-family: Snell Roundhand, cursive;
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

const RightSideContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  height: 80%;
  justify-content: flex-end;
  width: 31%;
  position: absolute;
  right: 8px;
  > :nth-child(1) {
    font-size: 20px;
  }
`

export default SearchService;