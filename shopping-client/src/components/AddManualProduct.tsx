import { TextField, Button, Stack, Paper } from '@mui/material'
import { useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { setQuantity } from '../features/cart/cartSlice'

export default function AddManualProduct() {
  const dispatch = useAppDispatch()
  const [name, setName] = useState('')
  const [qty, setQty] = useState(1)

  return (
    <Paper sx={{ p: 2 }}>
      <Stack direction="row" spacing={2}>
        <TextField
          size="small"
          label="שם מוצר"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          size="small"
          type="number"
          label="כמות"
          value={qty}
          onChange={e => setQty(Number(e.target.value))}
        />
        <Button
          variant="contained"
          onClick={() => {
            if (!name) return
            dispatch(
              setQuantity({
                id: Date.now(),
                name,
                quantity: qty,
                categoryId: -1,
                categoryName: 'אחר',
              })
            )
            setName('')
            setQty(1)
          }}
        >
          הוסף
        </Button>
      </Stack>
    </Paper>
  )
}
