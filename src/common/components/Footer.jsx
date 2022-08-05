import React from 'react'
import { Box, Grid, IconButton, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import fb from '../../assets/images/facebook.svg'
import ig from '../../assets/images/instagram.svg'
import tw from '../../assets/images/twitter.svg'
import yt from '../../assets/images/youtube.svg'
import SwitchMode from './SwitchMode'

const useStyle = makeStyles((theme) => ({
  root: {
    justifyContent: 'space-between',
    padding: '80px',
    flexDirection: 'row',
    alignItems: 'center',
  },
}))

const Footer = () => {
  const classes = useStyle()
  return (
    <Grid
      boxShadow="-1px -1px 4px 0px rgb(0 0 0 / 87%);"
      position={{
        xs: 'static !important',
        sm: 'static',
        lg: 'fixed',
        md: 'static',
      }}
      bottom="0"
      p={8}
      container
      className={classes.root}
    >
      <Box p={2} item>
        <SwitchMode />
        <Typography component="h1" variant="h4">
          Shoply.
        </Typography>
        <Typography className={classes.text} variant="span" component="h5">
          © Copyright 2021. Created by OurTeam
        </Typography>
      </Box>
      <Box p={2}>
        <IconButton>
          <img src={fb} alt="fb" />
        </IconButton>
        <IconButton>
          <img src={ig} alt="ig" />
        </IconButton>
        <IconButton>
          <img src={tw} alt="tw" />
        </IconButton>
        <IconButton>
          <img src={yt} alt="yt" />
        </IconButton>
      </Box>
    </Grid>
  )
}

export default Footer
