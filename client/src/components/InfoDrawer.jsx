import React, { Component } from 'react';
import styled from 'styled-components';

class InfoDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          message: 'New To Trello-chan? Check Out The Guide',
          image: 'https://a.trellocdn.com/prgb/dist/images/tips/guide-1@1x.3a63a6244ef2e7ade4d6.png',
          link: 'https://trello.com/guide?utm_source=trello&utm_medium=inapp&utm_content=header-tips&utm_campaign=guide'
        },
        {
          message: 'Get Inspired By Dozens Of Different Trello-chan Workflows',
          image: 'https://a.trellocdn.com/prgb/dist/images/tips/inspiration-1@1x.e1565bd541d2b56ec792.png',
          link: 'https://trello.com/inspiration?utm_source=trello&utm_medium=inapp&utm_content=header-tips&utm_campaign=inspiration'
        },
        {
          message: 'Make Boards More Powerful With Trello-chan Power-Ups',
          image: 'https://a.trellocdn.com/prgb/dist/images/tips/power-ups-1@1x.d7178bb1e5dc48fb4fe6.png',
          link: 'https://trello.com/power-ups?utm_source=trello&utm_medium=inapp&utm_content=header-tips&utm_campaign=power-ups'
        },
        {
          message: 'Join A Webinar To Take Your Productivity To The Next Level',
          image: 'https://a.trellocdn.com/prgb/dist/images/tips/webinars-1@1x.7e1a1e13b5deffa70d0e.png',
          link: 'https://trello.com/webinars?utm_source=trello&utm_medium=inapp&utm_content=header-tips&utm_campaign=webinar'
        }
      ],
      index: 0
    }
  }

  changeLink = () => {
    let index = Math.floor(Math.random() * this.state.messages.length);
    this.setState({ index });
  }

  render() {
    let { index, messages } = this.state;
    return (
      <DrawerContainer>
        <div>
          <div>Information</div>
          <div>X</div>
        </div>
        
        <hr/>

        <div>
          <a href={messages[index].link} target="_blank">
            <img src={messages[index].image} alt=""/>
            <div><h5>{messages[index].message}</h5></div>
          </a>
          <div onClick={this.changeLink}><u>Get a new tip</u></div>
        </div>

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
  height: 270px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: absolute;
  right: 10px;
  top: 33px;
  width: 310px;
  > :nth-child(3) {
      text-align: center;
    > :nth-child(2) {
      &:hover {
        background-color: rgba(210,210,210,.35);
        color: black;
      }
    }
    > :nth-child(1) {
      text-decoration: none;
      > :nth-child(2) {
        height: 40px;
        &:hover {
        background-color: rgba(210,210,210,.35);
        color: black;
      }
      }
    }
  }
  > :nth-child(4) {
    text-align: center;
    > :nth-child(n) {
      &:hover {
        background-color: rgba(210,210,210,.35);
        color: black;
      }
    }
  }
  > :nth-child(5) {
    margin: 10px 0px;
    text-align: center;
    > :nth-child(n) {
      margin: 0px 10px;
    }
  }
  & h5 {
    color: #17394d;
    font-size: 14px;
    margin: 5px 0px 5px 0px;
  }
  > :nth-child(1){
    display: flex;
    flex-direction: row;
    padding: 0px 10px 5px 10px;
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