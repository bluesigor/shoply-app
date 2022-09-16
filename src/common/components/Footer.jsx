import React from 'react'
import { Box, Grid, IconButton, Stack, Typography } from '@mui/material'

import SwitchMode from './SwitchMode'
import SwitchLocalization from './SwitchLocalization'
import { useFooterStyle } from '../../assets/styles/useFooterStyle'
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
const Footer = () => {
  const classes = useFooterStyle()

  return (
    <Grid
      boxShadow="-1px -1px 4px 0px rgb(0 0 0 / 87%);"
      position="block"
      bottom={0}
      left={0}
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      p={{ xs: 2, sm: 2, md: 5 }}
      container
      className={classes.root}
    >
      <Box p={2} item>
        <Typography component="h1" variant="h4">
          Shoply.
        </Typography>
        <Typography className={classes.text} variant="p" component="p">
          © Copyright 2022. Created by OurTeam
        </Typography>
      </Box>
      <Stack
        sx={{
          height: '100%',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <SwitchLocalization />
        <SwitchMode />
      </Stack>

      <Box p={2}>
        <IconButton aria-label="facebook">
          <Facebook />
        </IconButton>
        <IconButton aria-label="instagram">
          <Instagram />
        </IconButton>
        <IconButton aria-label="twitter">
          <Twitter />
        </IconButton>
        <IconButton aria-label="youtube">
          <YouTube />
        </IconButton>
      </Box>
    </Grid>
  )
}

export default Footer
