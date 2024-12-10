import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';


export const Works = () => {
    return (
        <StyledWorks>
            <WorkTitle>MY<br/> PROJECTS</WorkTitle>
            <FlexWrapper wrap='wrap'>
                <Work  title='A Case Study_ Find Peace in Meditation' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'/>
                <Work  title='A Case Study_ Find Peace in Meditation' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'/>
                <Work  title='A Case Study_ Find Peace in Meditation' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    
min-height:100vh;
    background-color:#ffffff
`

const WorkTitle = styled.h2`
    display: flex;
    justify-content:start;
    padding-left:40px;
    font-size:120px
`