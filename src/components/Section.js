import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Section = ({title , subtitle ,backgroundImage ,leftBtnText , rightBtnText  }) => {
  return (
    <Wrap bgImage= {backgroundImage}>
        <ItemText>
            <h1> {title} </h1>
            <p> {subtitle} </p>
        </ItemText>
    
        <ButtonWrapper>
            <ButtonGroup>
                { leftBtnText &&
                    <Button bgColor="white" fontColor="black" width="100px" opacity="0.85"> {leftBtnText} </Button>
                }
                
                { rightBtnText &&
                    <Button bgColor="black" fontColor="white" width="100px" opacity="1"> {rightBtnText} </Button>
                }
                
            </ButtonGroup>

            <DownArrow src="/images/down-arrow.svg" />
        </ButtonWrapper>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div `
    width : 100vw;
    height: 100vh;
    background: orange;
    background-size : cover;
    background-position : center;
    background-repeat : no-repeat;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : space-between;
    background-image: ${(props) => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div `
    padding-top: 15vh;
    text-align : center;
`

const ButtonGroup = styled.div `
    width: 500px;
    height : 100px;
    display: flex;
    justify-content : space-around;


    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

const DownArrow = styled.img `
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x : hidden;
    margin-bottom : 20px;
`

const ButtonWrapper = styled.div `
    display: flex;
    flex-direction : column;
    align-items: center;

`