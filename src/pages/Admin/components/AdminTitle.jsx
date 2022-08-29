import React from 'react'
import { Typography,Button } from '@mui/material'
import { Box } from '@mui/system'

import Localizator from '../../../common/components/Localizator'
import AdminNewProductModal from '../AdminNewProductModal/AdminNewProductModal'

import { useAdminDataContext } from '../../../context/AdminUsersDataContext'
import { useUserDataContext } from '../../../context/UserDataContext'

const AdminTitle = () => {
  const { userData } = useUserDataContext()
  const { adminProducts,adminUsers } = useAdminDataContext()

  return (
    <Box
      sx={{
        maxHeight: '90px',
        margin: '40px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="p" component="h3">
        <Localizator str={`Welcome ${userData.nickname} Admin.`} />
        <Localizator str="Now you can edit Users or Products Data." />
        <br />
        <Localizator str="p.s.: 'Enjoy the life of being an ADMIN'" />
      </Typography>
      {adminProducts.length > 0 && <AdminNewProductModal />}
      {adminUsers.length > 0 && <Button>Add new User</Button> }
    </Box>
  )
}

export default AdminTitle
