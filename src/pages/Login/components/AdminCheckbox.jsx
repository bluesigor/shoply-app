import React from 'react'
import { Checkbox, Grid, Typography } from '@mui/material'

import { useLoginStyle } from '../../../assets/styles/useLoginStyle'
import Localizator from '../../../common/components/Localizator'

const AdminCheckbox = ({ onChange, value }) => {
  const handleAdmin = (e) => {
    onChange((prev) => {
      return {
        ...prev,
        isAdmin: !prev.isAdmin,
      }
    })
  }

  const classes = useLoginStyle()

  return (
    <Grid flex={true} className={classes.admin} flexDirection="row">
      <Typography variant="p" component="h6" p={4}>
        <Localizator str="Sign in as an Admin?" />
      </Typography>
      <Checkbox onChange={handleAdmin} value={value} size="small" />
    </Grid>
  )
}

export default AdminCheckbox
