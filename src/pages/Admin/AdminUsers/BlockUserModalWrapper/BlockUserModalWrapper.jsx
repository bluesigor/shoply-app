import React from 'react'
import { TableCell } from '@mui/material'

import useModal from '../../../../utils/hooks/useModal'
import BlockUserModal from './components/BlockUserModal'
import OpenModalBlockUser from './components/OpenModalBlockUser'

const BlockUserModalWrapper = ({ id }) => {
  const { isOpen, setOpen, setClose } = useModal()

  return (
    <TableCell align="right">
      <OpenModalBlockUser setOpen={setOpen} />
      <BlockUserModal id={id} setClose={setClose} isOpen={isOpen} />
    </TableCell>
  )
}

export default BlockUserModalWrapper
