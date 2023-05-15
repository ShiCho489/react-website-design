import styled from 'styled-components';
import React from 'react'


const Container = styled.div`
   height: 50px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
   width: 60%;
   display: flex;
   align-item: center;
   justify-content: space-between;
`;

const Logo = styled.div`
     font-weight: bold;
     font-size:30px;
     text-decoration: solid underline purple ;
     
`;

const Menu = styled.ul`
     display: flex;
      list-style: none;
      
`;

const MenuItem = styled.li`
     margin-right: 30px;
     font-size: 20px;
     font-weight: bold;
     color: royalblue;
   
`;

const Button = styled.button`
     border: 2px solid white;
     padding: 10px 15px;
     background-color: yellow;
     color: black;
     font-wight: bold;
     border-radius: 10px;
     cursor: pointer;
`;


const Navbar = () => {
  return (
    <>
    <Container>
      <Wrapper>
        <Left><Logo> Digita</Logo>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Products & Services</MenuItem>
          <MenuItem>Features</MenuItem>
          <MenuItem>Pricing</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
        
        </Left>
      <Button>
        Click here..
      </Button>
      </Wrapper>
      </Container>
      </>
  )
}

export default Navbar