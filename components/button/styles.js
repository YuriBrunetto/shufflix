import styled from 'styled-components'

export const ButtonStyled = styled.button`
  height: ${(props) => props.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  outline: none;
  background-color: var(--primary-color);
  border: 0;
  border-radius: 4px;
  padding: 0 32px;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  margin-top: 32px;
  cursor: pointer;
`
