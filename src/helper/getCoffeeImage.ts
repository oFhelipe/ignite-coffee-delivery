import americano from '../assets/coffees/americano.png'
import arabe from '../assets/coffees/arabe.png'
import cafeComLeite from '../assets/coffees/cafe-com-leite.png'
import capuccino from '../assets/coffees/capuccino.png'
import chocolateQuente from '../assets/coffees/chocolate-quente.png'
import cubano from '../assets/coffees/cubano.png'
import expressoCremoso from '../assets/coffees/expresso-cremoso.png'
import expressoGelado from '../assets/coffees/expresso-gelado.png'
import expressoTradicional from '../assets/coffees/expresso-tradicional.png'
import havaiano from '../assets/coffees/havaiano.png'
import irlandes from '../assets/coffees/irlandes.png'
import latte from '../assets/coffees/latte.png'
import macchiato from '../assets/coffees/macchiato.png'
import mochaccino from '../assets/coffees/mochaccino.png'

export function getCoffeeImage(coffeeId: string) {
  switch (coffeeId) {
    case 'americano':
      return americano

    case 'arabe':
      return arabe

    case 'cafe-com-leite':
      return cafeComLeite

    case 'capuccino':
      return capuccino

    case 'chocolate-quente':
      return chocolateQuente

    case 'cubano':
      return cubano

    case 'expresso-cremoso':
      return expressoCremoso

    case 'expresso-gelado':
      return expressoGelado

    case 'expresso-tradicional':
      return expressoTradicional

    case 'havaiano':
      return havaiano

    case 'irlandes':
      return irlandes

    case 'latte':
      return latte

    case 'macchiato':
      return macchiato

    default:
      return mochaccino
  }
}
