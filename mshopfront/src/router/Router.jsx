import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Men from '../pages/Men'
import Women from '../pages/Women'
import Latest from '../pages/Latest'
import Pages from '../pages/Pages'
const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/latest' element={<Latest />} />
        <Route path='/pages' element={<Pages />} />

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
