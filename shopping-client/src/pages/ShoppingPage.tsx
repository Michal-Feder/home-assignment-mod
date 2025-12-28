import { Grid } from '@mui/material'
import CategoryList from '../components/CategoryList'
import ProductList from '../components/ProductList'
import CartSummary from '../components/CartSummary'

export default function ShoppingPage() {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs:12, md:3 }} >
        <CategoryList />
      </Grid>

      <Grid size={{xs:12, md:6}} >
        <ProductList />
      </Grid>

      <Grid size={{xs:12, md:3}}>
        <CartSummary />
      </Grid>
    </Grid>
  )
}
