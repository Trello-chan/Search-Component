import React from 'react';
import styled from 'styled-components';

const SearchDrawerDefault = (props) =>
  <DrawerContainer>
    <DrawerTop>
      <div>SAVED SEARCHES</div>
      <div>My Cards @me</div>
    </DrawerTop>
    <hr/>
    <DrawerBottom>
      <div></div>
      <div>Refine your search with operators like @member, #label, is:archived, and has:attachments.</div>
      <div>Learn More...</div>
    </DrawerBottom>
  </DrawerContainer>

const DrawerContainer = styled.div`
  background-color: #ebeef0;
  border-radius: 2px;
  color: #6b808c;
  font-family: Helvetica Neue,Arial,Helvetica,sans-serif;
  font-size: 11px;
  left: 106px;
  min-height: 125px;
  position: absolute;
  top: 34px;
  width: 460px;
  padding: 10px;
`;

const DrawerTop = styled.div`
  & :nth-child(1) {
    font-size: 9px;
    font-weight: 550;
    letter-spacing: 0.07em;
  }
  & :nth-child(2) {
    padding: 12px 0px 12px 7px;
  }
`

const DrawerBottom = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  line-height: 16px;
  & :nth-child(n) {
    padding: 1px;
  }
  & :nth-child(1) {
    background: url(https://a.trellocdn.com/prgb/dist/images/empty-states/comb.65864547b3e6ae50d7ff.svg) no-repeat 0;
    height: 40px;
    width: 42px;
  }
  & :nth-child(2) {
    width: 74%;
  }
  & :nth-child(3) {
    line-height: 38px;
    text-decoration: underline;
  }
`


export default SearchDrawerDefault;