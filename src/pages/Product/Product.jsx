import React from 'react'
import { Container, Stack } from '@mui/material'

import { useSingleProductContext } from '../../context/SingleProductContext'
import ProductInfo from './components/ProductInfo'
import ProductLogo from './components/ProductLogo'
import ButtonGoBack from './components/ButtonGoBack'

const Product = () => {
  const { isChoosen } = useSingleProductContext()

  return (
    <>
      {isChoosen ? (
        <Container>
          <Stack
            m={{ xs: '0px', md: '50px' }}
            p={{ xs: '20px 15px', md: '50px', sm: '100px' }}
            display="flex"
            alignItems="center"
            height={{ xs: '120vh', sm: '130vh', lg: '60vh' }}
            spacing={20}
            direction={{ md: 'column', sm: 'column', xs: 'column', lg: 'row' }}
          >
            <ProductLogo />
            <ProductInfo />
          </Stack>
        </Container>
      ) : (
        <ButtonGoBack />
      )}
    </>
  )
}

export default Product
