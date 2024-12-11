import React from 'react';
import styled from 'styled-components';
import photo from '..//../../assets/images/i.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';


 export const Main = () => {
    return (
        <StyledMain>          
            <FlexWrapper align='center' justify='space-around'>
          <div>
            <span>HELLO I’M Tyoma</span>
            <h1>A Frontend Developer</h1>
            </div>  
            <Kub></Kub>
            <Photo src={photo} alt="" />
          </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain  = styled.div`
    min-height:100vh;
    background-color:#FFFFFF
`
const Kub = styled.div`
width:200px;
height:200px;
background-color:#E7E7E7;
transform:rotate(-7.56deg)
`


const  Photo= styled.img`
width:100px;
height:100px;
transform:rotate(7.56deg)
`
