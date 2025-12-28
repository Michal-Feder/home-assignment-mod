import { useState, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Stack,
  Button,
} from '@mui/material'
import { setQuantity } from '../features/cart/cartSlice'
import AddManualProduct from './AddManualProduct'

export default function ProductList() {
  const categories = useAppSelector(state => state.categories.list)
  const products = useAppSelector(s => s.products.list)
  const cart = useAppSelector(s => s.cart)
  const dispatch = useAppDispatch()

  const [localQty, setLocalQty] = useState<Record<number, number>>({})
  const getCategoryName = (categoryId: number) =>
    categories.find(c => c.id === categoryId)?.name ?? 'לא ידוע'

  useEffect(() => {
    const map: Record<number, number> = {}
    cart.forEach(i => (map[i.id] = i.quantity))
    setLocalQty(map)
  }, [cart])

  return (
    <Stack spacing={2}>
      <AddManualProduct />

      {products.map(p => (
        <Card key={p.id}>
          <CardContent
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography sx={{ minWidth: 120 }}>{p.name}</Typography>

            <TextField
              type="number"
              size="small"
              label="כמות"
              sx={{ width: 80 }}
              value={localQty[p.id] ?? 0}
              onChange={e =>
                setLocalQty({
                  ...localQty,
                  [p.id]: Number(e.target.value),
                })
              }
            />

            <Button
              variant="contained"
              onClick={() =>
                dispatch(
                  setQuantity({
                    id: p.id,
                    name: p.name,
                    categoryId: p.categoryId,
                    categoryName: getCategoryName(p.categoryId),
                    quantity: localQty[p.id] ?? 0,
                  })
                )
              }
            >
              הוסף
            </Button>
          </CardContent>
        </Card>
      ))}
    </Stack>
  )
}
