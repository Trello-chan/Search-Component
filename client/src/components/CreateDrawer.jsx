import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

class CreateDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <DrawerContainer>
        <div>
          <div>Create</div>
          <div>X</div>
        </div>
        
        <hr/>

        <div>
          <h5>Create Board...</h5>
          <div>A board is made up of cards ordered on lists.  Use it to manage projects, track information, or organize anything</div>
        </div>

        <div>
          <h5>Create Team...</h5>
          <div>A team is a group of boards and people. Use it to organize your company, side hustle, family, or friends.</div>
        </div>

        <div>
          <h5>Create Business Team...</h5>
          <div>With Business Class your team has more security, administrative controls, and unlimited Power-Ups.</div>
        </div>
      </DrawerContainer>
    )
  }
}

const DrawerContainer = styled.div`
  background: white;
  border-radius: 2px;
  color: #6b808c;
  font-family: Helvetica Neue,Arial,Helvetica,sans-serif;
  font-size: 9.5px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: absolute;
  right: 10px;
  top: 33px;
  width: 240px;
  > :nth-child(n + 3) {
    padding: 5px 10px;
    &:hover {
      background: #0094FF;
      color: white;
    }
  }
  & h5 {
    color: #17394d;
    font-size: 12px;
    margin: 0px 0px 5px 0px;
  }
  > :nth-child(1){
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    padding-right: 10px;
    > :nth-child(1) {
      font-size: 12px;
      line-height: 8px;
      margin-left: 20px;
      text-align: center;
      width: 90%;
    }
    > :nth-child(2) {
      text-align: end;
      width: 10%;
    }
  }
`;

export default CreateDrawer;