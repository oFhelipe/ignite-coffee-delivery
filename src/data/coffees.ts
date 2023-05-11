import { CoffeeType, ICoffee } from '../interfaces/ICoffee'

export const coffees: ICoffee[] = [
  {
    id: 'expresso-tradicional',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quent e grãos moídos',
    types: ['Tradicional'] as CoffeeType[],
    price: 9.9,
  },
  {
    id: 'expresso-americano',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    types: ['Tradicional'] as CoffeeType[],
    price: 9.9,
  },
  {
    id: 'expresso-cremoso',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    types: ['Tradicional'] as CoffeeType[],
    price: 9.9,
  },
  {
    id: 'expresso-gelado',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    types: ['Tradicional', 'Gelado'] as CoffeeType[],
    price: 9.9,
  },
  {
    id: 'cafe-com-leite',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    types: ['Tradicional', 'Com Leite'] as CoffeeType[],
    price: 9.9,
  },
  {
    id: 'latte',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    types: ['Tradicional', 'Com Leite'] as CoffeeType[],
    price: 9.9,
  },
  {
    id: 'capuccino',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    types: ['Tradicional', 'Com Leite'] as CoffeeType[],
    price: 9.9,
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    types: ['Tradicional', 'Com Leite'] as CoffeeType[],
    price: 9.9,
  },
  {
    id: 'mocaccino',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    types: ['Tradicional', 'Com Leite'] as CoffeeType[],
    price: 9.9,
  },
  {
    id: 'chocolate-quente',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    types: ['Especial', 'Com Leite'] as CoffeeType[],
    price: 9.9,
  },
  {
    id: 'cubano',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    types: ['Especial', 'Alcoólico', 'Gelado'] as CoffeeType[],
    price: 9.9,
  },
  {
    id: 'havaiano',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    types: ['Especial'] as CoffeeType[],
    price: 9.9,
  },
  {
    id: 'arabe',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    types: ['Especial'] as CoffeeType[],
    price: 9.9,
  },
  {
    id: 'irlandes',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    types: ['Especial', 'Alcoólico'] as CoffeeType[],
    price: 9.9,
  },
]
