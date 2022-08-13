import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Fade from 'react-reveal/Fade';


const Section = ({title , subtitle ,backgroundImage ,leftBtnText , rightBtnText  }) => {
  return (
    <Wrap bgImage= {backgroundImage}>

        <Fade bottom>
            <ItemText>
                <h1> {title} </h1>
                <p> {subtitle} </p>
            </ItemText>
        </Fade>
        <ButtonWrapper>
            
            <ButtonGroup>
                <Fade left>
                    { leftBtnText &&
                        <Button bgColor="white" fontColor="black" width="100px" opacity="0.85"> {leftBtnText} </Button>
                    }
                </Fade>

                <Fade right> 
                    { rightBtnText &&
                        <Button bgColor="black" fontColor="white" width="100px" opacity="1"> {rightBtnText} </Button>
                    }
                </Fade>
                
            </ButtonGroup>

            <DownArrow src="/images/down-arrow.svg" />
        </ButtonWrapper>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div `
    scroll-snap-align: start;
    width : 100vw;
    height: 100vh;
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
    margin-top: 15vh;
    text-align : center;
    
`

const ButtonGroup = styled.div `
    width: 500px;
    height : 100px;
    display: flex;
    justify-content : center;


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
