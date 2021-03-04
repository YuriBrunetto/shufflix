import styled from 'styled-components'

export const FooterStyled = styled.footer`
  margin-top: auto;
  text-align: center;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.3);

    a {
      color: var(--primary-color);
      text-decoration: none;
    }
  }
`
