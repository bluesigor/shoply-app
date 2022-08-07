import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Main from '../../pages/Main/Main'
import Products from '../../pages/Products/Products'
import Login from '../../pages/Login/Login'
import User from '../../pages/User/User'
import Fallback from '../../pages/Fallback/Fallback'
import Admin from '../../pages/Admin/Admin'
import Layout from './Layout'
import RequireAuth from '../../common/components/RequireAuth'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="products" element={<Products />} />
          <Route element={<RequireAuth />}>
            <Route path="user" element={<User />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Fallback />} />
        </Route>
      </Routes>
    </>
  )
}

export default Routing
