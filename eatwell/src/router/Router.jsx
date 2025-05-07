import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../components/layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Offer from '../pages/Offer'
import Menu from '../pages/Menu'
import News from '../pages/News'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element = {<Layout />}>
           <Route path = '/' element = {<Home />} />
           <Route path = '/about' element = {<About />} />
           <Route path = '/offer' element = {<Offer />} />
           <Route path = '/menu' element = {<Menu />} />
           <Route path = '/news' element = {<News />} />
           <Route path = '/gallery' element = {<Gallery />} />
           <Route path = '/contact' element = {<Contact />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
