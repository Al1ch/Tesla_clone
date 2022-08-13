import React from 'react'
import styled from 'styled-components';

const MenuItem = ({children}) => {
  return (
    <Container> 
        <a href="#"> {children} </a>
    </Container>
  )
}

export default MenuItem;

const Container = styled.div`
    width : 100px;
    height : 30px;
    font-size : 14px;
    display : flex;
    align-items: center;
    border-radius : 5px;
    justify-content : center;
    white-space: nowrap;

    a {
        text-decoration : none;
    }
    transition: all 0.60s ease-in-out;
    :hover {
        background-color : #D3D3D3
    }

`
