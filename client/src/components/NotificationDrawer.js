import React from 'react';

const InfoDrawer = ({ closeDisplay }) =>
  <DrawerContainer>
    <div>
      <div>Notifications</div>
      <div onClick={closeDisplay}>&#215;</div>
    </div>

    <hr/>
    
    <DrawerContent>
      <div><u>View All</u></div>
  
      <div>
        <img src="https://a.trellocdn.com/prgb/dist/images/taco-sleep.0582d9f3bdb5060e7285.svg" alt=""/>
        <div>No Unread Notifications</div>
        <div>Click <u>View All</u> to view all your notifications</div>
      </div>
    </DrawerContent>

    <Options>
      <h4>Change Notification Email Frequency</h4>
    </Options>
  </DrawerContainer>

const DrawerContainer = styled.div`
  background: white;
  border-radius: 2px;
  color: #6b808c;
  max-height: 520px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: absolute;
  right: 10px;
  top: 41px;
  width: 420px;
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

const DrawerContent = styled.div`
  margin: 10px;
  & u {
    cursor: pointer;
    color: black;
  }
  > :nth-child(2) {
    height: 250px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
      padding: 30px;
    }
    > :nth-child(2) {
      font-size: 16px;
      padding: 10px;
    }
    > :nth-child(3) {
      font-size: 12px;
    }
  }
  > :nth-child(3) {
    cursor: pointer;
    & :hover {
      background-color: rgba(210,210,210,.35);
      color: white;
    }
  }
`;

const Options = styled.div`
  margin: 80px 0px 40px 0px;
  color: #17394d;
  > h4 { 
    padding: 10px;
  }
  & :hover {
    color: white;
    background: #3F7FBF;
    cursor: pointer;
  }
`

export default InfoDrawer;