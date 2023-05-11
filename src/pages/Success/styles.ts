import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 2rem;

  @media (min-width: 800px) {
    padding: 0 10rem;
    gap: 4rem;
  }

  @media (min-width: 1280px) {
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    img {
      display: block;
      min-width: 50%;
    }
  }
`

export const SuccessInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  h1 {
    ${(props) => props.theme.fonts['title-l']};
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
  & > p {
    ${(props) => props.theme.fonts['text-regular-l']};
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const OrderInfoBorder = styled.div`
  padding: 1px;
  background: linear-gradient(
    102.89deg,
    ${(props) => props.theme.colors.yellow} 2.61%,
    ${(props) => props.theme.colors.purple} 98.76%
  );
  border-radius: 6px 36px 6px 36px;
`
export const OrderInfoContainer = styled.div`
  padding: 2rem;
  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  gap: 2rem;

  position: relative;
`

export const OrderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  span {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:nth-child(1) {
    span {
      background-color: ${(props) => props.theme.colors.purple};
    }
  }

  &:nth-child(2) {
    span {
      background-color: ${(props) => props.theme.colors.yellow};
    }
  }

  &:nth-child(3) {
    span {
      background-color: ${(props) => props.theme.colors['yellow-dark']};
    }
  }

  p {
    ${(props) => props.theme.fonts['text-regular-m']}
    color: ${(props) => props.theme.colors['base-text']};
  }
`
