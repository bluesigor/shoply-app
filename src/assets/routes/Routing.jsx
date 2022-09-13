import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Main from '../../pages/Main/Main'
import ProductsWrapper from '../../pages/Products/ProductsWrapper'
import Login from '../../pages/Login/Login'
import User from '../../pages/User/User'
import Fallback from '../../pages/Fallback/Fallback'
import Admin from '../../pages/Admin/Admin'

import RequireAuth from '../../common/components/RequireAuth'
import Product from '../../pages/Product/Product'
import ShoppingCart from '../../pages/ShoppingCart/ShoppingCart'

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="products" element={<ProductsWrapper />} />
      <Route path="products/:productId" element={<Product />} />
      <Route element={<RequireAuth />}>
        <Route path="user" element={<User />} />
        <Route path="admin" element={<Admin />} />
        <Route path="shoppingCard" element={<ShoppingCart />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Fallback />} />
    </Routes>
  )
}

export default Routing
