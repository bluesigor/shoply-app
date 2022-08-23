import React from 'react'
import { Button, Stack } from '@mui/material'

import Localizator from '../../../common/components/Localizator'
import useAdminData from '../../../services/useAdminData/useAdminData'

const AdminSidebar = () => {
  const { handleShowProducts, handleShowUsers } = useAdminData()

  return (
    <Stack
      mt={20}
      height="30vh"
      maxWidth="220px"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="space-evenly"
    >
      <Button
        sx={{
          padding: '10px',
          width: '100%',
          color: 'inherit',
          border: '1px solid inherit',
          borderRadius: '8px',
        }}
        onClick={handleShowUsers}
        value="users"
      >
        <Localizator str="Users" />
      </Button>
      <Button
        sx={{
          padding: '10px',
          width: '100%',
          color: 'inherit',
          border: '1px solid inherit',
          borderRadius: '8px',
        }}
        onClick={handleShowProducts}
        value="products"
      >
        <Localizator str="Products" />
      </Button>
    </Stack>
  )
}

export default AdminSidebar
