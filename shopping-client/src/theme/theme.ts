import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    primary: {
      main: '#0d47a1',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontSize: 14,
    fontWeightMedium: 600,
  },
})
