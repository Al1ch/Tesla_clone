import React from 'react'
import styled from 'styled-components';
import MenuItem from './MenuItem';

const RightMenu = () => {
  return (
    <Wrapper>
        <MenuItem> Shop</MenuItem>
        <MenuItem> Tesla Account </MenuItem>
     
    </Wrapper>
  )
}

export default RightMenu;

const Wrapper = styled.div `
  
  width : 200px;
  height : 100%;
  display: flex;
  justify-content : space-around;
  color : black;
  font-weight : bold;
  margin-right : 80px;
`