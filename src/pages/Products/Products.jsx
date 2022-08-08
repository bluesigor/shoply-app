import React from 'react'
import { useUserSettingsContext } from '../../context/UserSettingsContext'
import { Typography } from '@mui/material'

import Localizator from '../../common/components/Localizator'

const Products = () => {
  const { language } = useUserSettingsContext()

  return (
    <>
      <Typography>
        <Localizator lang={language} str="Products" />
      </Typography>
    </>
  )
}

export default Products
