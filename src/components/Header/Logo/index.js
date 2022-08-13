import styled from "styled-components";

import React from 'react'

const Logo = () => {
  return (
    <Container>
        <a href="#"> <Img src="/images/logo.svg" alt="Tesla Logo" /> </a>
    </Container>
  )
}

export default Logo

const Container = styled.a`
    width : 130px;
    height : 30px;
    display : flex;
    align-items: center;
    justify-content : center;

`

const Img = styled.img `
  height : 17px;

`
