import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/home/Home'
import Wish from '../pages/wish/Wish'
import Cart from '../pages/cart/Cart'
import Admin from '../pages/admin/Admin'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wish' element={<Wish/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default AppRouter