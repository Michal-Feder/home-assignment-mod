import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {apiProducts} from '../../services/api'

export type Product = {
  id: number
  name: string
  categoryId: number
}

export const fetchProductsByCategory = createAsyncThunk<
  Product[],
  number
>('products/fetchByCategory', async categoryId => {
  const res = await apiProducts.get(`/categories/${categoryId}/products`)
  return res.data
})

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [] as Product[],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProductsByCategory.pending, state => {
        state.loading = true
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.list = action.payload
        state.loading = false
      })
  },
})

export default productsSlice.reducer
