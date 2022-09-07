import { Typography } from '@mui/material'
import Localizator from '../../../common/components/Localizator'

const ProductFallback = () => {
  return (
    <Typography component="h1" variant="p">
      <Localizator str="There's no such a product" />
    </Typography>
  )
}

export default ProductFallback
