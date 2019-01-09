import React from 'react';
import styled from 'styled-components';

const InfoDrawer = () =>
  <DrawerContainer>
    <div>
      <div>Notifications</div>
      <div>X</div>
    </div>

    <hr/>
    
    <DrawerContent>
      <div><u>View All</u></div>
  
      <div>
        <img src="https://a.trellocdn.com/prgb/dist/images/taco-sleep.0582d9f3bdb5060e7285.svg" alt=""/>
        <div>No Unread Notifications</div>
        <div>Click <u>View All</u> to view all your notifications</div>
      </div>

      <div>
        <h5>Change Notification Email Frequency</h5>
      </div>
    </DrawerContent>

  </DrawerContainer>

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

const DrawerContent = styled.div`
  & u {
    cursor: pointer
  }
  > :nth-child(3) {
    cursor: pointer;
    & :hover {
      background-color: rgba(210,210,210,.35);
      color: white;
    }
  }
`

export default InfoDrawer;