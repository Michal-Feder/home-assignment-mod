import { createSlice } from '@reduxjs/toolkit'

const orderSlice = createSlice({
  name: 'order',
  initialState: { submitted: false },
  reducers: {
    submitOrder(state) {
      state.submitted = true
    },
  },
})

export const { submitOrder } = orderSlice.actions
export default orderSlice.reducer
