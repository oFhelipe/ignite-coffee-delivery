export enum CartTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  COMPLETELY_REMOVE_ITEM_FROM_CART = 'COMPLETELY_REMOVE_ITEM_FROM_CART',
}

export function addItemToCartAction(coffeeId: string) {
  return {
    type: CartTypes.ADD_ITEM_TO_CART,
    payload: { coffeeId },
  }
}

export function removeItemFromCartAction(coffeeId: string) {
  return {
    type: CartTypes.REMOVE_ITEM_FROM_CART,
    payload: { coffeeId },
  }
}

export function completelyRemoveItemFromCartAction(coffeeId: string) {
  return {
    type: CartTypes.COMPLETELY_REMOVE_ITEM_FROM_CART,
    payload: { coffeeId },
  }
}
