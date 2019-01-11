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
          <div>&#215;</div>
        </div>
        
        <hr/>

        <Tips>
          <a href={messages[index].link} target="_blank">
            <img src={messages[index].image} alt=""/>
            <div><h3>{messages[index].message}</h3></div>
          </a>
          <div onClick={this.changeLink}><u>Get a new tip</u></div>
        </Tips>

        <hr />

        <FooterLinks>
          <a href="https://trello.com/tour">Tour</a>
          <a href="https://trello.com/pricing">Pricing</a>
          <a href="https://trello.com/platforms">Apps</a>
          <a href="https://blog.trello.com/">Blog</a>
          <a href="https://trello.com/privacy">Privacy</a>
          <a href="https://trello.com/b/DgEjhZsw/trello">More...</a>
        </FooterLinks>
      </DrawerContainer>
    )
  }
}

const DrawerContainer = styled.div`
  background: white;
  border-radius: 2px;
  color: #6b808c;
  height: 350px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: absolute;
  right: 13px;
  top: 41px;
  width: 360px;
  > :nth-child(4) {
    text-align: center;
    > :nth-child(n) {
      &:hover {
        background-color: rgba(210,210,210,.35);
        color: black;
      }
    }
  }
  > :nth-child(1){
    display: flex;
    flex-direction: row;
    padding: 5px 10px;
    > :nth-child(1) {
      margin-left: 20px;
      text-align: center;
      width: 90%;
    }
    > :nth-child(2) {
      font-size: 20px;
      line-height: 12px;
      font-weight: 300;
      text-align: end;
      width: 10%;
      &:hover { 
        cursor: pointer;
      }
    }
  }
`;

const Tips = styled.div`
 text-align: center;
  & h3 {
    color: #17394d;
    padding: 10px 15px;
    margin: 0;
  }
  > :nth-child(1) {
    text-decoration: none;
    > img { 
      border-radius: 5px;
      width: 95%;
    }
    > :nth-child(n) {
      min-height: 60px;
      &:hover {
        background-color: rgba(210,210,210,.35);
        color: black;
      }
    }
  }
  > :nth-child(2) {
    padding: 5px;
    &:hover {
      background-color: rgba(210,210,210,.35);
      color: black;
      cursor: pointer;
    }
  }
`;


const FooterLinks = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  & a {
    color: #6b808c;
  }
  > :nth-child(n) {
    border-radius: 5px;
    padding: 8px;
    &:hover {
      background-color: rgba(210,210,210,.35);
      color: black;
    }
  }
`

export default InfoDrawer;