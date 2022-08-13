import React from 'react'
import styled from 'styled-components';
import MenuItem from './MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const RightMenu = () => {

  const [burgerOpen, setBurger] = useState(false);
  return (
    <Wrapper>
        <MenuItem> Shop</MenuItem>
        <MenuItem> Account </MenuItem>
        <MenuIcon onClick = { () => setBurger(!burgerOpen)}/>


        <BurgerNav isBurgerOpen = {burgerOpen}>

        <CustomClose>
          <CloseIcon onClick = { () => setBurger(!burgerOpen)} />
        </CustomClose>

        <BurgerList>
          <BurgerItem> <a href="#"> Existing Inventory </a></BurgerItem>
          <BurgerItem> <a href="#"> Used Inventory </a></BurgerItem>
          <BurgerItem> <a href="#"> Cybertruck</a></BurgerItem>
          <BurgerItem> <a href="#"> a </a></BurgerItem>
          <BurgerItem> <a href="#"> Existing Inventory </a></BurgerItem>
          <BurgerItem> <a href="#"> Find us </a></BurgerItem>
          <BurgerItem> <a href="#"> Assistance </a></BurgerItem>
          <BurgerItem> <a href="#"> Country  </a></BurgerItem>

        </BurgerList>
      </BurgerNav>

    </Wrapper>
  )
}

export default RightMenu;

const Wrapper = styled.div `
  
  width : 215px;
  height : 100%;
  display: flex;
  justify-content : space-around;
  align-items : center;
  color : black;
  font-weight : bold;
  margin-right : 30px;
`

const BurgerNav = styled.div `

  width : 300px; 
  position : fixed;
  height : 100%;
  background : white;
  z-index : 100;
  top : 0 ;
  right : 0;
  display: flex;

  

  flex-direction : column;

  a {
    text-decoration : none;
  }

  transform: ${props => props.isBurgerOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.40s ease-in-out;

`

const BurgerList = styled.ul `

  height : 500px;
`

const BurgerItem = styled.li `
  height : 40px;

  width : 225px;
  font-weight : 545;
  margin-left : 30px;
  display : flex;
  align-items :center;
  border-radius : 10px;
  padding-left : 15px;
  transition: all 0.2s ease-in-out;

  &:hover {

    background : 	#E8E8E8;
  }
`

const CustomClose = styled.div `
  height : 60px;
  display : flex;
  width : 100%;
  display: flex;
  justify-content : flex-end;
  align-items : center;
  padding-right : 30px;
`
