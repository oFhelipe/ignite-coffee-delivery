import { InputHTMLAttributes } from 'react'
import * as S from './style'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOpitional?: boolean
  register?: UseFormRegisterReturn<string>
}

export const Input = ({
  children,
  isOpitional = false,
  className,
  register,
  ...inputProps
}: InputProps) => {
  return (
    <S.InputContainer className={className}>
      <S.Input {...inputProps} {...register}>
        {children}
      </S.Input>
      {isOpitional && <p>Opcional</p>}
    </S.InputContainer>
  )
}
