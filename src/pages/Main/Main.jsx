import { Button, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import main from '../../assets/images/mainLogo.svg'
import { useMainStyle } from '../../assets/styles/useMainStyle'
import { useMode } from '../../utils/hooks/useMode'

const Main = () => {
  const { color } = useMode()
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
            border: `${color ? '1px solid black' : '1px solid white'}`,
            color: `${color ? 'white' : 'black'}`,
          }}
          size="lg"
          href="products"
          className={classes.button}
        >
          Shop Now{' '}
        </Button>
      </Grid>
      <Grid item>
        <CardMedia sx={{ maxWidth: '500px' }} component="img" image={main} />
      </Grid>
    </Grid>
  )
}

export default Main
