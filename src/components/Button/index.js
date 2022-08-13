import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.div `
    width : 200px;
    height : 40px;
    color : ${(props) => props.fontColor};
    background : ${(props) => props.color};
    border-radius : 100px;
    display : flex;
    justify-content : center;
    align-items: center;
    text-transform : uppercase;
    opacity : ${(props)=> props.opacity};
    cursor : pointer;
    font-size : 15px;
`


const Button = ({children , width , bgColor , fontColor , opacity}) => {
  return (
    <StyledButton fontColor={fontColor} color={bgColor} width={width} opacity = {opacity}>
        {children}
    </StyledButton>
  )
}

export default Button