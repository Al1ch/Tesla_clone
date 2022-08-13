import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Header from './Header/Header'

const Home = () => {
  return (
   

    <Container>
       <Header/>
        <Section 
          title={"Model S"} 
          subtitle = {"Order Online for Touchless Delivery"} 
          backgroundImage = {"model-s.jpg"}
          leftBtnText ={"Custom Order"}
          rightBtnText ={"Existing Inventory"}
        />

        <Section
          title={"Model 3"} 
          subtitle = {"Order Online for Touchless Delivery"} 
          backgroundImage = {"model-3.jpg"}
          leftBtnText ={"Custom Order"}
          rightBtnText ={"Existing Inventory"}

        />
        <Section
          title={"Model X"} 
          subtitle = {"Order Online for Touchless Delivery"} 
          backgroundImage = {"model-x.jpg"}
          leftBtnText ={"Custom Order"}
          rightBtnText ={"Existing Inventory"}

        />
        <Section
          title={"Model Y"} 
          subtitle = {"Order Online for Touchless Delivery"} 
          backgroundImage = {"model-y.jpg"}
          leftBtnText ={"Custom Order"}
          rightBtnText ={"Existing Inventory"}

        />

        <Section
          title={"Lowest Cost Solar Panels in America"} 
          subtitle = {"Money-back guarantee"} 
          backgroundImage = {"solar-panel.jpg"}
          leftBtnText ={"Order now"}
          rightBtnText ={"Learn more"}

        />

        <Section
          title={"Solar for New Roofs"} 
          subtitle = {"Solar Rooft Costs Less Than a New Roof Plus Solar Panels"} 
          backgroundImage = {"solar-roof.jpg"}
          leftBtnText ={"Order now"}
          rightBtnText ={"Learn more"}

        />

        <Section
          title={"Accessories"} 
          subtitle = {""} 
          backgroundImage = {"accessories.jpg"}
          rightBtnText ={"Shop now"}

        />


    </Container>
  )
}

export default Home

const Container = styled.div `
    height : 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;

`

