import React from 'react'
import { ShoppingBag } from '@mui/icons-material'
import { Button, Grid, IconButton } from '@mui/material'

import Localizator from '../../../common/components/Localizator'

const ProductCardButton = () => {
  return (
    <Grid display="flex" flexDirection="row" justifyContent="space-between">
      <Button color="inherit">
        <Localizator str="Details" />
      </Button>
      <IconButton>
        <ShoppingBag />
      </IconButton>
    </Grid>
  )
}

export default ProductCardButton
