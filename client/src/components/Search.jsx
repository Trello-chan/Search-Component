import React, { Component } from 'react';
import styled from 'styled-components';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputting: false
    }
  }

  render() {
    let { inputting } = this.state;
    return (
      <StyledSearchTopContainer>
        {/* <StyledWidth /> */}
        {!inputting && <div><BlankSpace></BlankSpace><div>&#128270;</div></div>}
      </StyledSearchTopContainer>
    )
  }
}

const BlankSpace = styled.div`
  cursor: text;
  width: 110px;
  @media screen and (max-width: 600px) {
    width: 0px;
  }
  + div {
    cursor: pointer;
    font-size: 10px;
  }
`

const StyledSearchTopContainer = styled.div`
  background: rgba(255,255,255,.3);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3.5px;
  max-width: 145px;
  min-width: 26px;
  height: 100%;
  padding: 0px 5px;
  & :nth-child(1) {
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 600px) {
    padding: 0px;
  }
`;

// const StyledSearchTopContainer = styled.div`
//   background: rgba(255,255,255,.3);
//   border-radius: 3px;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-right: 3.5px;
//   max-width: 180px;
//   min-width: 26px;
//   height: 100%;
//   &:hover {
//     background-color: rgba(210,210,210,.35);
//   }
// `;

const StyledWidth = styled.input`
  width: 100px;
  background: rgba(255,255,255,.3);
  padding: 2px;
  &:focus {
    background-color: white;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export default Search;