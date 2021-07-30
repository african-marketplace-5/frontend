import React from 'react';
import styled from "styled-components";

function Home() {
  return (
    <>
      <HomeComponent>

      <Hero><h1>MarketPlace</h1></Hero>

      {/* <Title>Quick View</Title> */}

      <StyledAbout>
      <p>This Marketplace empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty. </p>
      </StyledAbout>

      </HomeComponent>
    </>
  )
}

// const Title = styled.h2`
// padding: 25px;
// color: white;
// background-color: #e89910;
// text-align: center;
// font-family: 'Roboto', sans-serif;
// `

const HomeComponent = styled.div`
// border: solid red 4px;
width: 80%;
height: 100vh;
padding-top: 30px;
padding-bottom: 30px;
margin: auto;
@media only screen and (max-width: 600px) {
    width: 90%;
}
`

const Hero = styled.div`
// border: solid blue 4px;
height: 500px;
width: 100%;
background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80');
background-position: center;
background-size: cover;
margin-bottom: 50px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;

h1 {
  color: white;
  font-size: 45px;
  font-family: 'Pacifico', cursive;
}
`
const StyledAbout = styled.div`
padding: 30px;
text-align: center;
color: white;
background-color: #e89910;
p {
  font-size: 20px;
  font-weight: bold;
}
`

export default Home;