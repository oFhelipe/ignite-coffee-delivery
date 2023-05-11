import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import * as S from './styles'
import { Input } from '../../../components/Input'
import Select from '../../../components/Select'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { useCart } from '../../../Contexts/CartContext'
import { ufArray } from '../../../helper/address'

const cartFormValidationSchema = zod.object({
  address: zod.object({
    zipcode: zod.string(),
    street: zod.string(),
    number: zod.string(),
    complement: zod.string().optional(),
    neighborhood: zod.string(),
    city: zod.string(),
    uf: zod.enum(ufArray).transform((a) => {
      return a.toUpperCase()
    }),
  }),
  paymentType: zod.string(),
})

export type CartFormData = zod.infer<typeof cartFormValidationSchema>

const PaymentForm = () => {
  const { updateOrderInfo, orderInfo } = useCart()
  const navigate = useNavigate()
  const { watch, setValue, handleSubmit, register } = useForm<CartFormData>({
    resolver: zodResolver(cartFormValidationSchema),
    defaultValues: orderInfo || {
      address: {
        city: '',
        complement: '',
        neighborhood: '',
        number: '',
        street: '',
        zipcode: '',
      },
      paymentType: '',
    },
  })
  const paymentType = watch('paymentType')

  const handleFinishOrder = (data: CartFormData) => {
    updateOrderInfo(data)
    navigate('/success')
  }

  return (
    <S.CheckoutItem>
      <h3>Complete seu pedido</h3>
      <form
        id="address-form"
        onSubmit={handleSubmit(handleFinishOrder, (e) => {
          console.log(e)
        })}
        action=""
      >
        <S.DeliveryContainer>
          <S.DeliveryHeader>
            <MapPinLine size={19} className="map-pin-line" />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </S.DeliveryHeader>
          <S.SmallInput
            required
            placeholder="CEP"
            register={register('address.zipcode')}
          />
          <Input
            required
            placeholder="Rua"
            register={register('address.street')}
          />
          <S.InputsContainer>
            <S.SmallInput
              required
              placeholder="Número"
              register={register('address.number')}
            />
            <Input
              placeholder="Complemento"
              isOpitional
              register={register('address.complement')}
            />
          </S.InputsContainer>
          <S.InputsContainer>
            <S.SmallInput
              required
              placeholder="Bairro"
              register={register('address.neighborhood')}
            />
            <Input
              required
              placeholder="Cidade"
              register={register('address.city')}
            />
            <S.UFInput
              required
              placeholder="UF"
              maxLength={2}
              minLength={2}
              register={register('address.uf')}
            />
          </S.InputsContainer>
        </S.DeliveryContainer>
      </form>
      <S.DeliveryContainer>
        <S.DeliveryHeader>
          <CurrencyDollar size={19} className="currency-dollar" />
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </S.DeliveryHeader>
        <S.PaymentTypeContianer>
          <Select
            onClick={() => {
              setValue('paymentType', 'credit-card')
            }}
            isSelected={paymentType === 'credit-card'}
          >
            <CreditCard size={20} />
            <p>Cartão de credito</p>
          </Select>
          <Select
            onClick={() => {
              setValue('paymentType', 'invoice')
            }}
            isSelected={paymentType === 'invoice'}
          >
            <Bank size={20} />
            <p>Cartão de debito</p>
          </Select>
          <Select
            onClick={() => {
              setValue('paymentType', 'money')
            }}
            isSelected={paymentType === 'money'}
          >
            <Money size={20} />
            <p>Dinheiro</p>
          </Select>
        </S.PaymentTypeContianer>
      </S.DeliveryContainer>
    </S.CheckoutItem>
  )
}

export default PaymentForm
