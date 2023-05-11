export enum CoffeeType {
  tradicional = 'Tradicional',
  gelado = 'Gelado',
  'com-leite' = 'Com Leite',
  especial = 'Especial',
  alcoolico = 'Alcoólico',
}

export interface ICoffee {
  id: string
  name: string
  description: string
  types: CoffeeType[]
  price: number
}
