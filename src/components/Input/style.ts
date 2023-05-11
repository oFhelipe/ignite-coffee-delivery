import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 0.75rem;
  color: ${(props) => props.theme.colors['base-text']};
  background-color: ${(props) => props.theme.colors['base-input']};
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  border-radius: 4px;
  p {
    color: ${(props) => props.theme.colors['base-label']};
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
  }
`
export const Input = styled.input`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  padding: 0.75rem;
  gap: 0.25rem;
  border-radius: 4px;

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
`
