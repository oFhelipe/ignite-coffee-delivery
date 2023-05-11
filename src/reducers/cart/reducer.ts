import { Cart, calcCartTotal } from '../../Contexts/CartContext'
import { CartTypes } from './action'
import { produce } from 'immer'

export function cartReducer(state: Cart, action: any) {
  switch (action.type) {
    case CartTypes.ADD_ITEM_TO_CART: {
      const itemCartIndex = state.items.findIndex(
        (cart) => cart.coffeeId === action.payload.coffeeId,
      )
      if (itemCartIndex >= 0) {
        return produce(state, (draft) => {
          draft.items[itemCartIndex].quantity++
          draft.total = calcCartTotal(draft.items)
        })
      } else {
        return produce(state, (draft) => {
          draft.items.push({
            coffeeId: action.payload.coffeeId,
            quantity: 1,
          })
        })
      }
    }
    case CartTypes.REMOVE_ITEM_FROM_CART: {
      const itemCartIndex = state.items.findIndex(
        (cart) => cart.coffeeId === action.payload.coffeeId,
      )
      if (itemCartIndex >= 0) {
        return produce(state, (draft) => {
          const itemCartQantity = draft.items[itemCartIndex].quantity
          if (itemCartQantity - 1 > 0) {
            draft.items[itemCartIndex].quantity--
          } else {
            draft.items.splice(itemCartIndex, 1)
          }
          draft.total = calcCartTotal(draft.items)
        })
      }
      return state
    }
    case CartTypes.COMPLETELY_REMOVE_ITEM_FROM_CART: {
      const itemCartIndex = state.items.findIndex(
        (cart) => cart.coffeeId === action.payload.coffeeId,
      )
      if (itemCartIndex >= 0) {
        return produce(state, (draft) => {
          draft.items.splice(itemCartIndex, 1)
          draft.total = calcCartTotal(draft.items)
        })
      }
      return state
    }

    default:
      return state
  }
}
