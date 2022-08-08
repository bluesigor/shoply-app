import React from 'react'
import { Button, CardMedia, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import main from '../../assets/images/mainLogo.svg'
import { useMainStyle } from '../../assets/styles/useMainStyle'
import { useUserSettingsContext } from '../../context/UserSettingsContext'
import Localizator from '../../common/components/Localizator'

const Main = () => {
  const classes = useMainStyle()
  const { language } = useUserSettingsContext()

  return (
    <Grid
      sx={{
        margin: '110px',
        justifyContent: 'space-between',
      }}
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
          <Localizator
            lang={language}
            str="Transforming shopping into an experience."
          />
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
            <Localizator lang={language} str="Shop Now" />
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
