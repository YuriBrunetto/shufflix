import styled from 'styled-components'

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

export const LogoStyled = styled.div`
  width: 50px;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }
`

export const H1 = styled.h1`
  color: var(--primary-color);
  font-size: 48px;
`

export const H2 = styled.h2`
  color: var(--text-color);
  font-size: 16px;
  font-weight: normal;
  font-style: italic;
`
