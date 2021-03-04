import React from 'react'
import PropTypes from 'prop-types'

import { ButtonStyled } from './styles'

const Button = ({ title, height, onClick }) => (
  <ButtonStyled type='button' height={height} onClick={() => onClick()}>
    {title}
  </ButtonStyled>
)

Button.propTypes = {
  title: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
