import React from 'react'
import { Button, CardMedia, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import main from '../../assets/images/mainLogo.svg'
import { useMainStyle } from '../../assets/styles/useMainStyle'
import Localizator from '../../common/components/Localizator'

const Main = () => {
  const classes = useMainStyle()

  return (
    <Grid
      sx={{
        justifyContent: 'space-between',
      }}
      mt={10}
      mb={17}
      className={classes.root}
      p={4}
      rowSpacing={2}
      container
      columnSpacing={{ sm: 10, md: 40 }}
    >
      <Grid m={6} item>
        <Typography mb={6} variant="h4" component="h3">
          Logitech G Pro X Superlight
        </Typography>
        <Typography mb={2}>
          <Localizator str="Transforming shopping into an experience." />
        </Typography>
        <Button
          sx={{
            border: '1px solid black',
            color: 'inherit',
          }}
          size="lg"
          className={classes.button}
          aria-label="Shop Now"
        >
          <Link className={classes.link} to="products">
            <Localizator str="Shop Now" />
          </Link>
        </Button>
      </Grid>
      <Grid item>
        <CardMedia
          alt="mouse"
          sx={{ width: '100%', height: '100%' }}
          component="img"
          image={main}
        />
      </Grid>
    </Grid>
  )
}

export default Main
