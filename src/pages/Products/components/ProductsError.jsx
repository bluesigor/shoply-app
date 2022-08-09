import React, { useEffect } from 'react'
import { Typography } from '@mui/material'

import { useProductsDataContext } from '../../../context/ProductsDataContext'
import Localizator from '../../../common/components/Localizator'
import { useGetProducts } from '../../../services/getProducts/getProducts'

const ProductsError = () => {
  const { prodsErr } = useGetProducts()
  const { error, setProductsDataError } = useProductsDataContext()

  useEffect(() => {
    if (prodsErr) {
      setProductsDataError()
    }
  }, [prodsErr])

  if (error) {
    return (
      <Typography component="p" variant="h2">
        <Localizator str="Something went wrong..." />
      </Typography>
    )
  }
}

export default ProductsError
