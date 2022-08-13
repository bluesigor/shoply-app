import React from 'react'
import { Box, Button, Rating, Stack, Typography } from '@mui/material'

import Localizator from '../../../common/components/Localizator'
import { useSingleProductContext } from '../../../context/SingleProductContext'
import { useNotificationContext } from '../../../context/NotificationContext'

const ProductInfo = () => {
  const { product } = useSingleProductContext()
  const { setNotificationOpen } = useNotificationContext()

  const { title, price, rating, description, category } = product

  return (
    <Box margin={{ xs: '20px', md: '20px' }} position="relative">
      <Typography
        fontSize={{ xs: '1em', sm: '1.25em', md: '1.5em' }}
        sx={{
          letterSpacing: '0.0935em',
        }}
        p="4"
        component="p"
      >
        <Localizator str={title} />
        (<Localizator str={category} />)
      </Typography>
      <Box display="flex" flexDirection="column" maxWidth="100%">
        <Typography
          fontSize={{ xs: '0.85em', sm: '0.9em' }}
          fontWeight={400}
          mt={4}
        >
          <Localizator str={description} />
        </Typography>
        <Rating
          onClick={() =>
            setNotificationOpen('We really appreciate your feedback!')
          }
          value={rating.rate}
          sx={{
            marginTop: '20px',
          }}
        />
        <Stack
          alignItems="flex-start"
          mt={10}
          p={1}
          direction="row"
          justifyContent="space-between"
        >
          <Typography fontWeight={700}>
            <Localizator str="Price" /> {price}$
          </Typography>
          <Stack display="flex" alignItems="center" direction="row">
            <Button size="small" color="inherit" variant="outlined">
              -
            </Button>
            <Typography marginX={4}>0</Typography>
            <Button variant="outlined" size="small" color="inherit">
              +
            </Button>
          </Stack>
        </Stack>
        <Button
          variant="contained"
          sx={{
            bgcolor: 'inherit',
            color: 'inherit',
            marginTop: '20px',
            '&:hover': {
              bgcolor: 'inherit',
            },
          }}
        >
          <Localizator str="Go to Shopping Bag" />
        </Button>
      </Box>
    </Box>
  )
}

export default ProductInfo
