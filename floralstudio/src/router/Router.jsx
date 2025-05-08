import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import Aboutus from '../pages/Aboutus'
import Portfolio from '../pages/Portfolio'
import Pricing from '../pages/Pricing'
import Contacts from '../pages/Contacts'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element = {<Layout />}>
            <Route path = '/' element = {<Home />} />
            <Route path = '/aboutus' element = {<Aboutus />} />
            <Route path = '/portfolio' element = {<Portfolio />} />
            <Route path = '/pricing' element = {<Pricing />} />
            <Route path = '/contacts' element = {<Contacts />} />
        </Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
