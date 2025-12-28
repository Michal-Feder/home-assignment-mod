import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShoppingPage from './pages/ShoppingPage'
import OrderSummaryPage from './pages/OrderSummaryPage'
import AppLayout from './components/layout/AppLayout'

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<ShoppingPage />} />
          <Route path="/order" element={<OrderSummaryPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}
