import React from 'react'
import { Button, Stack } from '@mui/material'

import Localizator from '../../../common/components/Localizator'
import useAdminData from '../../../services/useAdminData/useAdminData'
import { useSidebarStyle } from '../../../assets/styles/useSidebarStyle'

const AdminSidebar = () => {
  const {
    handleShowProducts,
    handleShowBlockedUsers,
    handleShowUsers,
  } = useAdminData()
  const classes = useSidebarStyle()

  return (
    <Stack className={classes.root}>
      <Button
        variant="outlined"
        color="inherit"
        className={classes.button}
        onClick={handleShowUsers}
      >
        <Localizator str="Users" />
      </Button>
      <Button
        variant="outlined"
        color="inherit"
        className={classes.button}
        onClick={handleShowProducts}
      >
        <Localizator str="Products" />
      </Button>

      <Button
        variant="outlined"
        color="inherit"
        className={classes.button}
        onClick={handleShowBlockedUsers}
      >
        <Localizator str="Blocked Users" />
      </Button>
    </Stack>
  )
}

export default AdminSidebar
