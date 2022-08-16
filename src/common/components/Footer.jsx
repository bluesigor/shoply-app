import React from 'react'
import { Box, Grid, IconButton, Typography } from '@mui/material'

import fb from '../../assets/images/facebook.svg'
import ig from '../../assets/images/instagram.svg'
import tw from '../../assets/images/twitter.svg'
import yt from '../../assets/images/youtube.svg'
import SwitchMode from './SwitchMode'
import SwitchLocalization from './SwitchLocalization'
import { useFooterStyle } from '../../assets/styles/useFooterStyle'

const Footer = () => {
  const classes = useFooterStyle()

  return (
    <Grid
      boxShadow="-1px -1px 4px 0px rgb(0 0 0 / 87%);"
      position={{
        xs: 'static',
        sm: 'static',
        md: 'static',
      }}
      p={4}
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
      <SwitchLocalization />
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
