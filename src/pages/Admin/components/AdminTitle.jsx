import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import { useUserDataContext } from '../../../context/UserDataContext'
import Localizator from '../../../common/components/Localizator'

const AdminTitle = () => {
  const { userData } = useUserDataContext()

  return (
    <Box
      sx={{
        maxHeight: '90px',
        margin: '40px',
      }}
    >
      <Typography variant="p" component="h3">
        <Localizator str={`Welcome ${userData.nickname} Admin.`} />
        <Localizator str="Now you can edit Users or Products Data." />
        <br />
        <Localizator str="p.s.: 'Enjoy the life of being an ADMIN'" />
      </Typography>
    </Box>
  )
}

export default AdminTitle
