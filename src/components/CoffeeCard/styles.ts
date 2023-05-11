import styled from 'styled-components'

import { Button } from '../Button'

export const CoffeeCardCatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme.colors['base-card']};
  align-items: center;
  padding: 0 1.25rem;

  img {
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
  }
`

export const TypeList = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
  span {
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) => props.theme.fonts.tag}
    color: ${(props) => props.theme.colors['yellow-dark']};
    background-color: ${(props) => props.theme.colors['yellow-light']};
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
  }
`
export const CoffeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    ${(props) => props.theme.fonts['title-s']}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
  p {
    ${(props) => props.theme.fonts['text-regular-s']}
    color: ${(props) => props.theme.colors['base-label']};
    text-align: center;
  }
  margin-bottom: 2rem;
`
export const PurchaseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`

export const PurchasePriceContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0.25rem;
  align-items: center;
  justify-content: space-between;
  p {
    ${(props) => props.theme.fonts['text-regular-s']}
    color: ${(props) => props.theme.colors['base-text']};
    span {
      ${(props) => props.theme.fonts['title-m']}
    }
  }
`

export const ImageInfoContainer = styled.div`
  display: flex;
`

export const CoffeeCardCartContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors['base-card']};
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem 0.25rem;
  gap: 1rem;
  border-bottom: solid 1px ${(props) => props.theme.colors['base-button']};

  img {
    height: 4rem;
    aspect-ratio: 1;
  }

  h3 {
    ${(props) => props.theme.fonts['text-bold-m']}
    color: ${(props) => props.theme.colors['base-text']};
    white-space: nowrap;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
  gap: 0.5rem;
  p {
    ${(props) => props.theme.fonts['text-regular-m']}
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`
export const ActionContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const RemoveButton = styled(Button)`
  padding: 0 0.5rem;
  min-width: 2.375rem;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors['base-button']};
  color: ${(props) => props.theme.colors['base-text']};
  ${(props) => props.theme.fonts['button-s']}
  font-weight: bold;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  span {
    display: none;
  }

  @media (min-width: 430px) {
    span {
      display: initial;
    }
  }

  &:hover {
    background-color: ${(props) => props.theme.colors['base-hover']};
    color: ${(props) => props.theme.colors['base-title']};

    svg {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
  }
`
