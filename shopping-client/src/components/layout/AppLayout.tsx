import { AppBar, Toolbar, Typography, Container } from '@mui/material'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">מערכת קניות</Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>{children}</Container>
    </>
  )
}
