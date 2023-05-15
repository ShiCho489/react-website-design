import React from 'react'
import styled from 'styled-components';

const Container= styled.div`
   height: calc(100vh - 50px);
   display: flex;
   padding: 20px;

`;


const Left = styled.div`
   width: 60%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const Title= styled.h1`
    width: 60%;
    font-size: 60px;
`;

const Description = styled.p`
width: 60%;
font-size: 20px;
text-align: justify;
font-family: sans-serif;
padding:10px;

`;

const Info = styled.div`
   width: 60%;
   display: flex;
`;

const Button= styled.button`
 

`

const Right = styled.div`
   width: 40%;
`;
const Intro = () => {
  return (
    <Container>
        <Left>
            <Title>We build creative solutions for the web</Title>
            <Description>We change to match you needs as we very well understand the consequences 
                of this and we actually do this to satisfy our clients needs. We take time to understansd 
                your business needs, suggest processes and develop appropriate, cost-effective solutions.
                </Description>
                <Info>
                <Button></Button>
                </Info>
                </Left>
        <Right>r</Right>
    </Container>
  )
}

export default Intro