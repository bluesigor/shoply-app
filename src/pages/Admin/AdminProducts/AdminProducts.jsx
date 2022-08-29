import React, { useState } from 'react'

import AdminProductPagination from './components/AdminProductPagination'
import AdminProductsList from './components/AdminProductsList'

const AdminProducts = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  return (
    <>
      <AdminProductsList page={page} rowsPerPage={rowsPerPage} />
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
