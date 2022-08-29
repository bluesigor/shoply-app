import React, { useState } from 'react'

import AdminProductPagination from './components/AdminProductPagination'
import AdminProductsTable from './components/AdminProductsTable'

const AdminProducts = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  return (
    <>
      <AdminProductsTable page={page} rowsPerPage={rowsPerPage} />
      <AdminProductPagination
        page={page}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        setPage={setPage}
      />
    </>
  )
}

export default AdminProducts
