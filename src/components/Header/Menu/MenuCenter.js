import React from 'react'
import styled from 'styled-components';
import MenuItem from './MenuItem';


const MenuCenter = () => {
  return (
    <Wrapper>
        <MenuItem> Model S</MenuItem>
        <MenuItem> Model 3</MenuItem>
        <MenuItem> Model X</MenuItem>
        <MenuItem> Model Y</MenuItem>
        <MenuItem> Powerall</MenuItem>
        <MenuItem> Recharge</MenuItem>
    </Wrapper>
  )
}

export default MenuCenter;

const Wrapper = styled.div `
  
  width : 450px;
  height : 100%;
  display: flex;
  justify-content : space-between;
  font-weight : bold;

  @media (max-width : 850px){
    display :none;
  }


`