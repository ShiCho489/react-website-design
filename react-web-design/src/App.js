import styled from "styled-components";
import Navbar from './components/Navbar';
import Intro from './components/Intro';


const Container = styled.div`
      height: 100vh;
      overflow: hidden;
`;

const IntroShape= styled.div`
width: 50%;
height: 80%;
position: absolute;
right: 0;
bottom: 0;
margin-right: 10px;
z-index: -1;
clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
background-color: orange;
`

function App() {
  return (
    <>
     <Container>
      <Navbar />
      <Intro />
      <IntroShape />
      
     </Container>
    </>
  );
}

export default App;
