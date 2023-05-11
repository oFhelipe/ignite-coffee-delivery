import { ButtonHTMLAttributes } from 'react'
import * as S from './style'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...buttonProps }: ButtonProps) => {
  return <S.ButtonComponent {...buttonProps}>{children}</S.ButtonComponent>
}
