import { Grid, Input, Typography } from '@mui/material'
import React from 'react'
import { useLoginStyle } from '../../../assets/styles/useLoginStyle'
import useLogin from '../../../utils/hooks/useLogin'

const AdminCheckbox = () => {
  const { inputData, handleAdmin } = useLogin()
  const { isAdmin } = inputData
  const classes = useLoginStyle()
  return (
    <Grid flex={true} className={classes.admin} flexDirection="row">
      <Typography variant="p" component="h6" p={4}>
        Sign in as an Admin?
      </Typography>
      <Input
        onChange={handleAdmin}
        value={isAdmin}
        disableUnderline={true}
        type="checkbox"
      />
    </Grid>
  )
}

export default AdminCheckbox
