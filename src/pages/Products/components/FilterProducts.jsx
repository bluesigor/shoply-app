import React from 'react'
import { Typography, Button } from '@mui/material'

import Localizator from '../../../common/components/Localizator'
import useCategories from '../../../utils/hooks/useCategories'
const FilterProducts = ({ handleCategory }) => {
  const { allCategories } = useCategories()

  return (
    <>
      {allCategories.map((category) => {
        return (
          <Button
            fullWidth
            color="inherit"
            variant="outlined"
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: {
                xs: '100%',
                md: '150px',
                sm: '100%',
              },
              fontSize: {
                xs: '14px',
                md: '18px',
                sm: '16px',
              },
              height: {
                xs: '40px',
                sm: '45px',
                md: '60px',
              },
              marginTop: 2,
              textAlign: 'center',
            }}
            key={category}
            onClick={() => handleCategory(category)}
          >
            <Typography textTransform="capitalize" width="100%" variant="p">
              <Localizator str={category} />
            </Typography>
          </Button>
        )
      })}
    </>
  )
}

export default FilterProducts
