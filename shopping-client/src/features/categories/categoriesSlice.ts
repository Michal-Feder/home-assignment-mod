import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {apiProducts} from '../../services/api'

export type Category = {
  id: number
  name: string
}

export const fetchCategories = createAsyncThunk<Category[]>(
  'categories/fetch',
  async () => {
    const res = await apiProducts.get('/categories')
    return res.data
  }
)

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [] as Category[],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.loading = true
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.list = action.payload
        state.loading = false
      })
  },
})

export default categoriesSlice.reducer
