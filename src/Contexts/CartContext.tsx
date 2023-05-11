import {
  createContext,
  useContext,
  ReactNode,
  useReducer,
  useEffect,
  useState,
} from 'react'
import { cartReducer } from '../reducers/cart/reducer'
import { coffees } from '../data/coffees'
import {
  addItemToCartAction,
  completelyRemoveItemFromCartAction,
  removeItemFromCartAction,
} from '../reducers/cart/action'
import { CartFormData } from '../pages/Checkout/PaymentForm'

export interface CartItem {
  coffeeId: string
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
}

interface CartContextProps {
  cart: Cart
  cartItemsQantity: number
  addItemToCart: (coffeeId: string) => void
  removeItemFromCart: (coffeeId: string) => void
  completelyRemoveItemFromCart: (coffeeId: string) => void
  updateOrderInfo: (newOrderInfo: CartFormData) => void
  orderInfo: CartFormData | null
}

const CartContext = createContext({} as CartContextProps)

export const useCart = () => useContext(CartContext)
interface CartProviderProps {
  children: ReactNode
}

export const calcCartTotal = (cartItems: CartItem[]) => {
  return cartItems.reduce((total, cartItem) => {
    return (
      total +
      cartItem.quantity * coffees.find((c) => c.id === cartItem.coffeeId)!.price
    )
  }, 0)
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, dipatch] = useReducer(
    cartReducer,
    {
      items: [],
      total: 0,
    },
    (initialState) => {
      const storedStateAsJson = localStorage.getItem(
        '@ignite-coffee:cart-1.0.0',
      )
      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson)
      }
      return initialState
    },
  )
  const [orderInfo, setOrderInfo] = useState<CartFormData | null>(() => {
    const storedStateAsJson = localStorage.getItem(
      '@ignite-coffee:order-info-1.0.0',
    )
    if (storedStateAsJson) {
      return JSON.parse(storedStateAsJson)
    }
    return null
  })
  const cartItemsQantity = cart.items.length

  const getCoffeeById = (coffeeId: string) => {
    return coffees.find((coffee) => coffee.id === coffeeId)
  }

  const addItemToCart = (coffeeId: string) => {
    const coffee = getCoffeeById(coffeeId)
    if (coffee) {
      dipatch(addItemToCartAction(coffeeId))
    }
  }

  const removeItemFromCart = (coffeeId: string) => {
    const coffee = getCoffeeById(coffeeId)
    if (coffee) {
      dipatch(removeItemFromCartAction(coffeeId))
    }
  }

  const completelyRemoveItemFromCart = (coffeeId: string) => {
    const coffee = getCoffeeById(coffeeId)
    if (coffee) {
      dipatch(completelyRemoveItemFromCartAction(coffeeId))
    }
  }

  const updateOrderInfo = (newOrderInfo: CartFormData) => {
    const stateJSON = JSON.stringify(newOrderInfo)
    localStorage.setItem('@ignite-coffee:order-info-1.0.0', stateJSON)
    setOrderInfo(newOrderInfo)
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cart)
    localStorage.setItem('@ignite-coffee:cart-1.0.0', stateJSON)
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItemsQantity,
        addItemToCart,
        removeItemFromCart,
        completelyRemoveItemFromCart,
        updateOrderInfo,
        orderInfo,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
