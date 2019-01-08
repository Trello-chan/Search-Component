import React, { Component } from 'react';
import styled from 'styled-components';

class InfoDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <DrawerContainer>
        <div>
          <div>Information</div>
          <div>X</div>
        </div>
        
        <hr/>

        <img src="https://a.trellocdn.com/prgb/dist/images/tips/guide-1@1x.3a63a6244ef2e7ade4d6.png 1x, https://a.trellocdn.com/prgb/dist/images/tips/guide-1@2x.eab001f563b4e3d8a5d1.png 2x" alt=""/>

        <h5>New To Trello? Check Out The Guide</h5>

        <div><u>Get a new tip</u></div>

        <hr />

        <div>
          <a href="https://trello.com/tour">Tour</a>
          <a href="https://trello.com/pricing">Pricing</a>
          <a href="https://trello.com/platforms">Apps</a>
          <a href="https://blog.trello.com/">Blog</a>
          <a href="https://trello.com/privacy">Privacy</a>
          <a href="https://trello.com/b/DgEjhZsw/trello">More...</a>
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

export default InfoDrawer;