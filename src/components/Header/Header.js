
import styled from 'styled-components'
import Logo from './Logo'
import RightMenu from './Menu/RightMenu'
import MenuCenter from './Menu/MenuCenter'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'




const Header = () => {

  const [burgerOpen, setBurger] = useState(false);


  return (
    <Container>
      <Logo/>
      <MenuCenter/>
      <RightMenu/>
    </Container>
  )
}

export default Header;

const Container = styled.div `

  width: 100vw;
  min-height : 40px;
  z-index : 1;
  display : flex;
  align-items :center;
  position : fixed;
  justify-content : space-between;
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
  transition: all 0.40s ease-in-out;

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