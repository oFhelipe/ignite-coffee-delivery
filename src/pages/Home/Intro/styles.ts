import styled from 'styled-components'
import background from '../../../assets/intro-background.svg'

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  background-image: url(${background});
  padding: 0 2rem;
  gap: 1rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  img {
    display: none;
    max-width: 29.75rem;
    max-height: 22.5rem;
  }

  @media (min-width: 800px) {
    padding: 5.75rem 10rem;
  }

  @media (min-width: 1024px) {
    img {
      display: initial;
      width: 50%;
    }
  }
`
export const IntroInfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 2rem;
  h1 {
    ${(props) => props.theme.fonts['title-l']}
    color: ${(props) => props.theme.colors['base-title']};
    margin-bottom: 1.25rem;
  }
  & > p {
    ${(props) => props.theme.fonts['text-regular-l']}
    color: ${(props) => props.theme.colors['base-text']};
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    h1 {
      ${(props) => props.theme.fonts['title-xl']}
    }
  }
`

export const StrengthsList = styled.div`
  display: grid;
  gap: 1.25rem;

  @media (min-width: 1400px) {
    grid-template-columns: max-content max-content;
    grid-column-gap: 2.5rem;
  }
`
export const Strength = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:nth-child(1) {
    span {
      background-color: ${(props) => props.theme.colors['yellow-dark']};
    }
  }
  &:nth-child(2) {
    span {
      background-color: ${(props) => props.theme.colors['base-text']};
    }
  }
  &:nth-child(3) {
    span {
      background-color: ${(props) => props.theme.colors.yellow};
    }
  }
  &:nth-child(4) {
    span {
      background-color: ${(props) => props.theme.colors.purple};
    }
  }

  span {
    height: 2rem;
    width: 2rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.white};
  }
  p {
    ${(props) => props.theme.fonts['text-regular-m']}
    color: ${(props) => props.theme.colors['base-text']};
  }
`
