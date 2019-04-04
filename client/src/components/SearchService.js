import React, { Component } from 'react';
import axios from 'axios';

import HomeButton from './cssImages/home';
import BoardImage from './cssImages/board';
import BoardsButton from './Boards/BoardsButton';
import BoardsButtonDrawer from './Boards/BoardsButtonDrawer';
import Search from './Search/Search';
import CreateDrawer from './CreateDrawer';
import InfoDrawer from './InfoDrawer';
import NotificationDrawer from './NotificationDrawer';
import UserButton from './UserButton';

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

  changeDisplay = (options) => {
    let displayOptions = this.state.displayOptions === options ? false : options;
    this.setState({ displayOptions });
  }

  fetchLoadData = () => {
    let id = Math.ceil(Math.random() * 100);
    axios
      .get(`/search-api/load?id=${id}`)
      .then(({ data }) => this.setState({ userData: data }))
      .catch(err => console.error(err));
  }

  render() {
    let { displayOptions } = this.state;
    let { boards, member } = this.state.userData;
    return (
      <StyledSearchComponent>
        <StyledButton>
          <HomeButton />
        </StyledButton>

        <BoardsButton changeDisplay={this.changeDisplay}/>

        <StyledSearchTopContainer style={{ background: displayOptions === 'search' ? 'white': 'rgba(255,255,255,.3)' }}>
          {displayOptions !== 'search' && <div onClick={() => this.changeDisplay('search')}><BlankSpace></BlankSpace><div>&#128270;</div></div>}
          {displayOptions === 'search' && <Search closeDisplay={() => this.changeDisplay('search')}/>}
        </StyledSearchTopContainer>

        <LogoContainer>
          <div>
            <BoardImage/>
            <div>Trello-chan</div>
          </div>
        </LogoContainer>

        <RightSideContainer>
          <StyledButton onClick={() => this.changeDisplay('create')}>+</StyledButton>
          <StyledButton onClick={() => this.changeDisplay('info')}>ℹ</StyledButton>
          <StyledButton onClick={() => this.changeDisplay('notification')}>&#128276;</StyledButton>
          {member && <UserButton member={member}/>}
        </RightSideContainer>
        {displayOptions === 'boards' && <BoardsButtonDrawer boards={boards}/>}
        {displayOptions === 'create' && <CreateDrawer closeDisplay={() => this.changeDisplay(displayOptions)}/>}
        {displayOptions === 'info' && <InfoDrawer closeDisplay={() => this.changeDisplay(displayOptions)}/>}
        {displayOptions === 'notification' && <NotificationDrawer closeDisplay={() => this.changeDisplay(displayOptions)}/>}
      </StyledSearchComponent>
    )
  }
}

const flexAlignJustify = `
  align-items: center;
  display: flex;
  justify-content: center;
`;

const StyledSearchComponent = styled.div`
  background: rgba(0,0,0,.35);
  height: 32px;
  padding: 4px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  align-items: center;
`;

const StyledButton = styled.div`
  background: rgba(255,255,255,.3);
  border-radius: 3px;
  cursor: pointer;
  height: 32px;
  width: 32px;
  ${flexAlignJustify}
  margin-right: 3px;
  &:hover {
    background-color: rgba(210,210,210,.35);
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  margin-left: 50%;
  > :nth-child(1) {
    ${flexAlignJustify}
    flex-direction: row;
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
    font-size: 25px;
    font-weight: 300;
  }
  > :nth-child(2) {
    @media screen and (max-width: 750px) {
      display: none;
    }
  }
  + div {
    & hr {
      border-color: rgba(9,45,66,.13);
      border-width: .5px;
      margin: 7px 10px;
    }
  }
`

const BlankSpace = styled.div`
  cursor: text;
  width: 150px;
  @media screen and (max-width: 750px) {
    width: 0px;
  }
  + div {
    cursor: pointer;
    font-size: 12px;
  }
`;

const StyledSearchTopContainer = styled.div`
  border-radius: 3px;
  ${flexAlignJustify}
  margin-right: 3.5px;
  max-width: 280px;
  min-width: 32px;
  height: 100%;
  padding: 0px 5px 0px 5px;
  > :nth-child(1) {
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 750px) {
    padding: 0px;
  }
`;

export default SearchService;