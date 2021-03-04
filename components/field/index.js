import React from 'react'
import PropTypes from 'prop-types'

import { FieldStyled, LabelStyled, InputStyled } from './styles'

const Field = ({ title, value, onChange }) => (
  <FieldStyled>
    <LabelStyled>{title}</LabelStyled>
    <InputStyled
      type='text'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </FieldStyled>
)

Field.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Field
