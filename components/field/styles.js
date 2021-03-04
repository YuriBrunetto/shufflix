import styled from 'styled-components'

export const FieldStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`

export const LabelStyled = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: var(--text-color);
`

export const InputStyled = styled.input`
  height: 48px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  font-size: 20px;
  font-weight: bold;
  max-width: 90px;
  margin-top: 8px;
  color: #fff;
  text-align: center;
  outline: none;
  appearance: none;
  transition: 0.1s;

  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 6px 32px rgba(0, 0, 0, 0.2);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`
