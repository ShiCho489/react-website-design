import React from 'react'
import styled from 'styled-components'

const Square = styled.div`
    width: 60px;
    height: 60px;
    opacity: 0.7;
    position: absolute; 
    top: -60%;
    left: -60%;
    z-index: -1;
    

    @keyframes square {
        0%   {background-color:red; left:0px; top:50px;}
       15%  {background-color:yellow; left:500px; top:0px;}
       25%  {background-color:plum; left: 500px; bottom: 500px;}
       50%  {background-color:blue; left:200px; top:100px; }
       75%  {background-color:green; left:50px; top:200px;}
       100% {background-color:red; left:0px; top:0px;}
    }

`;


const AnimatedShapes = () => {
  return (

    <Square />
     
   
  )
    
   
}

export default AnimatedShapes