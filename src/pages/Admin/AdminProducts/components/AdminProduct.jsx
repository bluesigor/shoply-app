import React from 'react'
import { TableBody } from '@mui/material'

import { useAdminDataContext } from '../../../../context/AdminUsersDataContext'
import AdminSingleProductData from './AdminSingleProductData'

const AdminProduct = () => {
  const { adminProducts, pagination } = useAdminDataContext()

  const { productsPage, productsRowsPerPage } = pagination

  return (
    <TableBody>
      {adminProducts
        .slice(
          productsPage * productsRowsPerPage,
          productsPage * productsRowsPerPage + productsRowsPerPage,
        )
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

export default AdminProduct
