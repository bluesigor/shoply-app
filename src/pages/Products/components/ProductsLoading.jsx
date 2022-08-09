import React, { useEffect } from 'react'
import { Typography } from '@mui/material'

import { useProductsDataContext } from '../../../context/ProductsDataContext'
import { useGetProducts } from '../../../services/getProducts/getProducts'
import ProductCard from './ProductCard'
import Localizator from '../../../common/components/Localizator'

const ProductsLoading = () => {
  const { prodsData } = useGetProducts()
  const { isLoading, products, setProductsData } = useProductsDataContext()

  useEffect(() => {
    setProductsData(prodsData)
  }, [prodsData])

  const product = products.map((item) => {
    const { id, title, image } = item
    return <ProductCard key={id} title={title} image={image} />
  })

  if (isLoading) {
    return (
      <Typography component="p" variant="h2">
        <Localizator str="Loading..." />
      </Typography>
    )
  }

  return product
}

export default ProductsLoading
