import * as S from './styles'

interface AddRemoveProps {
  handleAdd: () => void
  handleRemove: () => void
  quantity: number
}

const AddRemove = ({
  handleAdd,
  handleRemove,
  quantity = 0,
}: AddRemoveProps) => {
  return (
    <S.AddRemoveContainer>
      <S.AddRemoveButton onClick={handleRemove}>-</S.AddRemoveButton>
      <p>{quantity}</p>
      <S.AddRemoveButton onClick={handleAdd}>+</S.AddRemoveButton>
    </S.AddRemoveContainer>
  )
}

export default AddRemove
