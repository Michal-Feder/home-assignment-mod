import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type CartItem = {
  id: number
  name: string
  categoryId: number
  categoryName: string
  quantity: number
}

const initialState: CartItem[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setQuantity(state, action: PayloadAction<CartItem>) {
      const index = state.findIndex(
        item => item.id === action.payload.id
      )

      if (index !== -1) {
        if (action.payload.quantity > 0) {
          state[index].quantity = action.payload.quantity
        } else {
          state.splice(index, 1)
        }
      } else if (action.payload.quantity > 0) {
        state.push(action.payload)
      }
    },

    clearCart() {
      return []
    },
  },
})

export const { setQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
