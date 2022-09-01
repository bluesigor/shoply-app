import React from 'react'
import { Button, Stack } from '@mui/material'

import Localizator from '../../../common/components/Localizator'
import useAdminData from '../../../services/useAdminData/useAdminData'

const AdminSidebar = () => {
  const {
    handleShowProducts,
    handleShowBlockedUsers,
    handleShowUsers,
  } = useAdminData()

  return (
    <Stack
      maxWidth="220px"
      display="flex"
      marginX={2}
      alignItems="center"
      flexDirection="column"
      justifyContent="space-evenly"
    >
      <Button
        margin={2}
        variant="outlined"
        color="inherit"
        sx={{
          padding: '10px',
          width: '100%',
        }}
        onClick={handleShowUsers}
        value="users"
      >
        <Localizator str="Users" />
      </Button>
      <Button
        variant="outlined"
        color="inherit"
        sx={{
          padding: '10px',
          width: '100%',
        }}
        onClick={handleShowProducts}
        value="products"
      >
        <Localizator str="Products" />
      </Button>

      <Button
        variant="outlined"
        color="inherit"
        sx={{
          padding: '10px',
          width: '100%',
        }}
        onClick={handleShowBlockedUsers}
        value="products"
      >
        <Localizator str="Blocked Users" />
      </Button>
    </Stack>
  )
}

export default AdminSidebar
