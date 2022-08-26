import React from 'react'

import { useAdminDataContext } from '../../../../context/AdminUsersDataContext'
import AdminSingleProductData from './AdminSingleProductData'
import { TableBody } from '@mui/material'

const AdminSingleProduct = ({ page, rowsPerPage }) => {
  const { adminProducts } = useAdminDataContext()

  return (
    <TableBody>
      {adminProducts
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((prod) => {
          const {
            id,
            title,
            rating: { count },
            price,
          } = prod

          return (
            <AdminSingleProductData
              product={prod}
              key={id}
              count={count}
              id={id}
              title={title}
              price={price}
            />
          )
        })}
    </TableBody>
  )
}

export default AdminSingleProduct
