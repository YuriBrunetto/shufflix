import React from 'react'
import PropTypes from 'prop-types'

import Header from '@/components/header'
import Footer from '@/components/footer'

import { MainStyled, LimiterStyled } from './styles'

function Layout({ children }) {
  return (
    <>
      <MainStyled>
        <Header />
        {children}
      </MainStyled>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
