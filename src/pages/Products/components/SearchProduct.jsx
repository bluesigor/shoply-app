import React from 'react'
import {
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from '@mui/material'

import Localizator from '../../../common/components/Localizator'
import { Cancel, Search } from '@mui/icons-material'

const SearchProduct = ({
  setSearchItem,
  searchProduct,
  searchItem,
  resetSearch,
}) => {
  const handleSearch = (e) => {
    const value = e.target.value
    setSearchItem(value)
  }

  return (
    <FormControl
      fullWidth
      variant="filled"
      m={{
        xs: 1,
        sm: 1,
        md: 2,
      }}
      sx={{
        paddingRight: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: { xs: 1, sm: 1, md: 2 },
        flexDirection: 'row',
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          searchProduct()
        }
      }}
    >
      <InputLabel htmlFor="filled-adornment-password">Search</InputLabel>
      <FilledInput
        m={{ sm: 1, md: 2 }}
        sx={{
          backgroundColor: 'inherit',
          fontSize: {
            xs: '14px',
            sm: '18px',
          },
          width: '70%',
        }}
        id="filled-adornment-password"
        type={searchItem ? 'text' : 'password'}
        value={searchItem}
        onChange={handleSearch}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={resetSearch}
              aria-label="cancel search"
              edge="end"
            >
              {searchItem ? <Cancel /> : <Search />}
            </IconButton>
          </InputAdornment>
        }
      />
      <Button
        onClick={searchProduct}
        size="large"
        color="inherit"
        variant="contained"
        sx={{
          fontSize: {
            xs: '14px',
            sm: '18px',
          },
          width: '20%',
        }}
      >
        <Localizator str="Search" />
      </Button>
    </FormControl>
  )
}
export default SearchProduct
