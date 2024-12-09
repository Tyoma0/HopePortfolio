import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'


export const Footer = ()=>{
return(
<StyletFooter>
<CopyRight>2022 Relume. All right reserved.</CopyRight>


<SocialList>
    <SocialItem>
          <SocialLink>
                      <Icon  iconId='Facebook'/>
         </SocialLink>
    </SocialItem>
    <SocialItem>
          <SocialLink>
                      <Icon iconId='LinkedIn'/>
         </SocialLink>
    </SocialItem>
    <SocialItem>
          <SocialLink>
                      <Icon iconId='Twitter'/>
         </SocialLink>
    </SocialItem>
    <SocialItem>
          <SocialLink>
                      <Icon iconId='Instagram'/>
         </SocialLink>
    </SocialItem>
  
</SocialList>
</StyletFooter>
)

}


const StyletFooter =styled.footer`
    
`
const SocialList =styled.ul`
    
`
const SocialItem =styled.li`
    
`
const SocialLink = styled.a`
    
`

const CopyRight =styled.small`
    
`
