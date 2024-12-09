import React from 'react';
import styled from 'styled-components';
import { About } from './about/About';
import fotoImage from './../../assets/images/images.jpg'

export const AboutMe = () => {
    return (
        <StyleAbout>
            <SpanTitle>About Me</SpanTitle>
            <SectionTitle>I look at usual <br/> things with my <br /> unsual eyes.</SectionTitle>
            <About text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras porta. Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque viverra lectus arcu, tincidunt ultrices pellentesque.' src={fotoImage}></About>
        </StyleAbout>
    );
};

 const StyleAbout = styled.section`

 `

 const SectionTitle  = styled.h2`
    
 `

 const   SpanTitle = styled.span`
    
 `