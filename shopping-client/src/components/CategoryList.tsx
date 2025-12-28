import { useEffect } from 'react'
import { List, ListItemButton, Paper, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchCategories } from '../features/categories/categoriesSlice'
import { fetchProductsByCategory } from '../features/products/productsSlice'

export default function CategoryList() {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(s => s.categories.list)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  return (
    <Paper>
      <Typography p={2} fontWeight="bold">
        קטגוריות
      </Typography>

      <List>
        {categories.map(c => (
          <ListItemButton
            key={c.id}
            onClick={() => dispatch(fetchProductsByCategory(c.id))}
          >
            {c.name}
          </ListItemButton>
        ))}
      </List>
    </Paper>
  )
}
