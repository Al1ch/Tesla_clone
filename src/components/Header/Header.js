import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import RightMenu from './Menu/RightMenu'
import MenuCenter from './Menu/MenuCenter'

const Header = () => {
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

  display : flex;
  align-items :center;
  position : fixed;
  justify-content : space-between;
`

