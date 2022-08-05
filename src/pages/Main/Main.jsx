import React from 'react'
import { Button, CardMedia, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import main from '../../assets/images/mainLogo.svg'
import { useMainStyle } from '../../assets/styles/useMainStyle'

const Main = () => {
  const classes = useMainStyle()
  return (
    <Grid
      mt={10}
      mb={10}
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
        <Typography mb={2} variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum
          nibh erat
        </Typography>
        <Button
          sx={{
            border: '1px solid black',
            color: 'inherit',
          }}
          size="lg"
          className={classes.button}
        >
          <Link className={classes.link} to="products">
            Shop Now
          </Link>
        </Button>
      </Grid>
      <Grid item>
        <CardMedia sx={{ maxWidth: '500px' }} component="img" image={main} />
      </Grid>
    </Grid>
  )
}

export default Main
