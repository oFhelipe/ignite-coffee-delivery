export function getFullPaymentType(type: string) {
  switch (type) {
    case 'invoice':
      return 'Boleto'

    case 'credit-card':
      return 'Cartão de credito'

    default:
      return 'Dinheiro'
  }
}
