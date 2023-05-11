import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  padding: 2rem;

  @media (min-width: 800px) {
    padding: 1rem 10rem;
  }

  h2 {
    ${(props) => props.theme.fonts['title-m']}
  }
`
export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`

export const CoffeeList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`
