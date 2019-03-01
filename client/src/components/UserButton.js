import React from 'react';
// import styled from 'styled-components';
const styled = window.styled;

const UserButton = ({ member }) =>
  <MemberContainer>
    {member.name[0]}
  </MemberContainer>

const newColor = () => `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`

const MemberContainer = styled.div`
  align-items: center;
  background-color: ${newColor()};
  border-radius: 50%;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 32px;
  &:hover {
    cursor: pointer;
  }
`;

export default UserButton;