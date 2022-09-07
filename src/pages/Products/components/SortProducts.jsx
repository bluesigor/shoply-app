import React from 'react'
import { Box, IconButton, MenuItem, Select } from '@mui/material'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import SortIcon from '@mui/icons-material/Sort'

import Localizator from '../../../common/components/Localizator'
import useSort from '../../../utils/hooks/useSort'

const SortProducts = ({ sortValue, handleSortValue }) => {
  const { handleOpen, open, handleClose } = useSort()

  return (
    <Box
      sx={{
        width: {
          md: '100px',
          xs: '100%',
          sm: '100%',
        },
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      component="div"
    >
      {!open && (
        <IconButton onClick={handleOpen}>
          <SortIcon />
        </IconButton>
      )}

      {open && (
        <Select
          IconComponent={SortIcon}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          sx={{
            marginRight: '10px',
          }}
          variant="standard"
          onClose={handleClose}
          onOpen={handleOpen}
          value={sortValue}
          label="Sort"
          onChange={handleSortValue}
        >
          <MenuItem
            sx={{
              fontSize: '14px',
            }}
            value=""
          >
            <Localizator str="none" />
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: '14px',
            }}
            value="Sort by title"
          >
            <Localizator str="Sort by title" />
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: '14px',
            }}
            value="Sort by price up"
          >
            <Localizator str="Sort by price up" />
            <ArrowUpward
              sx={{
                fontSize: '18px',
              }}
            />
          </MenuItem>
          <MenuItem
            sx={{
              fontSize: '14px',
            }}
            value="Sort by price down"
          >
            <Localizator str="Sort by price down" />
            <ArrowDownward
              sx={{
                fontSize: '18px',
              }}
            />
          </MenuItem>
        </Select>
      )}
    </Box>
  )
}

export default SortProducts
