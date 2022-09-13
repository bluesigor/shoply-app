import React from 'react'
import { Box, MenuItem, Select } from '@mui/material'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import SortIcon from '@mui/icons-material/Sort'

import Localizator from '../../../common/components/Localizator'
import useSelect from '../../../utils/hooks/useSelect'

const SortProducts = ({ sortValue, setSortValue }) => {
  const { handleOpen, open, handleClose } = useSelect()

  const handleSortValue = (e) => {
    setSortValue(e.target.value)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      component="div"
    >
      <Select
        IconComponent={SortIcon}
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        sx={{
          fontSize: { xs: '14px', sm: '18px' },
          paddingRight: '20px',
        }}
        variant="standard"
        onClose={handleClose}
        onOpen={handleOpen}
        value={sortValue}
        onChange={handleSortValue}
      >
        <MenuItem
          selected={true}
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
    </Box>
  )
}

export default SortProducts
