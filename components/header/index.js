import React from 'react'

import { HeaderStyled, LogoStyled } from './styles'
import { ReactSVG as SVG } from 'react-svg'

const Header = () => (
  <HeaderStyled>
    <LogoStyled>
      <SVG src='/logo.svg' />
    </LogoStyled>
    header
  </HeaderStyled>
)

export default Header
