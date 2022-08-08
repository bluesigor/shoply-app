import React from 'react'
import { Grid, Input, Typography } from '@mui/material'

import { useLoginStyle } from '../../../assets/styles/useLoginStyle'
import Localizator from '../../../common/components/Localizator'
import { useUserSettingsContext } from '../../../context/UserSettingsContext'

const AdminCheckbox = ({ onChange, value }) => {
  const { language } = useUserSettingsContext()

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
        <Localizator lang={language} str="Sign in as an Admin?" />
      </Typography>
      <Input
        onChange={handleAdmin}
        value={value}
        disableUnderline={true}
        type="checkbox"
      />
    </Grid>
  )
}

export default AdminCheckbox
