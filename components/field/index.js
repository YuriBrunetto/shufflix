import React from 'react'
import PropTypes from 'prop-types'

import { FieldStyled, LabelStyled, InputStyled } from './styles'

const Field = ({ title, value, onChange }) => (
  <FieldStyled>
    <LabelStyled>{title}</LabelStyled>
    <InputStyled
      type='number'
      value={value ? value : null}
      onChange={(e) => onChange(e.target.value)}
      pattern='\d*'
      placeholder='0'
    />
  </FieldStyled>
)

Field.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Field
