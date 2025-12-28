import { Box, Typography, Divider, Button, Stack } from '@mui/material'
import { useAppSelector } from '../app/hooks'
import { useNavigate } from 'react-router-dom'

interface CartSummaryProps {
  showContinueButton?: boolean
}

export default function CartSummary({ showContinueButton = true }: CartSummaryProps) {
  const cart = useAppSelector(state => state.cart)
  const navigate = useNavigate()

  const groupedByCategory = cart.reduce<
    Record<
      string,
      {
        name: string
        quantity: number
      }[]
    >
  >((acc, item) => {
    const category = item.categoryName
    if (!acc[category]) {
      acc[category] = []
    }

    acc[category].push({
      name: item.name,
      quantity: item.quantity,
    })

    return acc
  }, {})

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h6" gutterBottom>
        סל קניות
      </Typography>

      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        {Object.entries(groupedByCategory).map(
          ([categoryName, items]) => (
            <Box key={categoryName} sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                gutterBottom
              >
                {categoryName}
              </Typography>

              <Stack spacing={0.5}>
                {items.map((item, index) => (
                  <Typography
                    key={`${item.name}-${index}`}
                    variant="body2"
                  >
                    {item.name} × {item.quantity}
                  </Typography>
                ))}
              </Stack>
            </Box>
          )
        )}
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography fontWeight={600} sx={{ mb: 1 }}>
        סה״כ פריטים: {totalItems}
      </Typography>

      {showContinueButton && (<Button
        variant="contained"
        fullWidth
        disabled={cart.length === 0}
        onClick={() => navigate('/order')}
      >
        המשך הזמנה
      </Button>
      )}
    </Box>
  )
}
