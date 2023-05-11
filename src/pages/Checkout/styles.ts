import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;

  @media (min-width: 800px) {
    padding: 2rem 10rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    align-items: flex-start;
  }
`
