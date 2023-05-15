import React from 'react'
import styled from 'styled-components';
import Marvin from '../image/marvin.png';
import AnimatedShapes from '../components/AnimatedShapes'


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
font-family: roboto;
letter-spacing: 2px;
padding:10px;

`;

const Info = styled.div`
   width: 60%;
   margin-top: 50px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   
`;

const Button= styled.button`
    padding: 15px;
   background-color: orange;
   color: gray;
   border-radius: 10px;
   font-weight: bold;
   border: none;
   font-family: roboto;
   letter-spacing: 2px;
   cursor: pointer;
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;

const Phone= styled.span`
   color: royalblue;
   font-weight: bold;
`;

const ContactText = styled.span`
     color: gray;
     margin-top: 5px;
`

const Right = styled.div`
      width: 40%;
`;

const Image = styled.image`
      width: 100%;
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
                <Button>Start here</Button>
                
                <Contact>
                    <Phone>Call us (+358) 203117575</Phone>
                    <ContactText>Digify Info at your service Mon-Fri 8 a.m.-8 p.m.</ContactText>
                </Contact>
                </Info>
                </Left>
        <Right><Image src={Marvin}/></Right>
        <AnimatedShapes />
    </Container>
  )
}

export default Intro