import { Typography, Box } from '@mui/material'
import Localizator from '../../../common/components/Localizator'

const ProductFallback = () => {
  return (
    <Box height="40vh">
      <Typography mt={4} component="h1" variant="p">
        <Localizator str="There's no such a product" />
      </Typography>
    </Box>
  )
}

export default ProductFallback
