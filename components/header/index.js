import React from 'react'

import Image from 'next/image'
import { HeaderStyled, LogoWrapper, LogoStyled, H1, H2 } from './styles'

const Header = () => (
  <HeaderStyled>
    <LogoWrapper>
      <H1>shufflix</H1>
      {/* <LogoStyled>
        <Image src='/logo.png' alt='Shufflix' width={68} height={40} />
      </LogoStyled> */}
    </LogoWrapper>
    <H2>Shuffle an episode of your favorite TV Show</H2>
  </HeaderStyled>
)

export default Header
