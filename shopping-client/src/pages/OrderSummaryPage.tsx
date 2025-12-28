import { useState } from 'react'
import {
  Paper,
  TextField,
  Button,
  Stack,
  Typography,
  Snackbar,
  Alert,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { clearCart } from '../features/cart/cartSlice'
import { apiOrders } from '../services/api'

export default function OrderSummaryPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const cart = useAppSelector(state => state.cart)

  const [form, setForm] = useState({
    name: '',
    address: '',
    email: '',
  })

  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const isValid =
    form.name &&
    form.address &&
    form.email.includes('@') &&
    cart.length > 0

  const submit = async () => {
    if (!isValid || loading) return

    setLoading(true)
    setError(null)

    try {
      await apiOrders.post('/orders', {
        ...form,
        items: cart.map(item => ({
          productName: item.name,
          quantity: item.quantity,
        })),
      })

      setSuccess(true)
      dispatch(clearCart())

      setTimeout(() => {
        navigate('/')
      }, 2000)
    } catch (e) {
      setError('אירעה שגיאה בשליחת ההזמנה. אנא נסי שוב.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Paper sx={{ p: 3, maxWidth: 500, mx: 'auto' }}>
        <Typography fontWeight="bold" mb={2}>
          סיכום הזמנה
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="שם מלא"
            required
            value={form.name}
            onChange={e =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <TextField
            label="כתובת מלאה"
            required
            value={form.address}
            onChange={e =>
              setForm({ ...form, address: e.target.value })
            }
          />

          <TextField
            label="אימייל"
            required
            error={!!form.email && !form.email.includes('@')}
            value={form.email}
            onChange={e =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <Button
            variant="contained"
            disabled={!isValid || loading}
            onClick={submit}
          >
            {loading ? 'שולח הזמנה…' : 'אשר הזמנה'}
          </Button>
        </Stack>
      </Paper>

      <Snackbar
        open={success}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled">
          ההזמנה נשלחה בהצלחה 🎉
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!error}
        autoHideDuration={4000}
        onClose={() => setError(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="error" variant="filled">
          {error}
        </Alert>
      </Snackbar>
    </>
  )
}
