import React from 'react';
const styled = window.styled;

const SearchDrawerDefault = (props) =>
  <div>
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
  </div>

const DrawerTop = styled.div`
  > :nth-child(1) {
    font-size: 12px;
    font-weight: 500;
  }
  > :nth-child(2) {
    padding: 12px 0px 12px 7px;
  }
  + hr {
    border-color: rgba(9,45,66,.13);
    border-width: .5px;
    margin: 7px 0px;
  }
`;

const DrawerBottom = styled.div`
  display: flex;
  flex-direction: row;
  padding: 15px 10px;
  line-height: 16px;
  > * {
    padding: 1px;
  }
  > :nth-child(1) {
    background: url(https://a.trellocdn.com/prgb/dist/images/empty-states/comb.65864547b3e6ae50d7ff.svg) no-repeat 0;
    height: 40px;
    width: 42px;
  }
  > :nth-child(2) {
    width: 74%;
  }
  > :nth-child(3) {
    line-height: 38px;
    text-decoration: underline;
  }
`


export default SearchDrawerDefault;