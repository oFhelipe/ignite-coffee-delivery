import { ReactNode } from 'react'
import * as S from './styles'
import { ButtonProps } from '../Button'

interface SelectProps extends ButtonProps {
  children: ReactNode
  isSelected: boolean
}

const Select = ({ children, ...buttonProps }: SelectProps) => {
  return <S.SelectButton {...buttonProps}>{children}</S.SelectButton>
}

export default Select
