import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import HomePage from './home.jsx'
import Counter from './counter.jsx'
import UserForm from './form.jsx'

import Header from './header.jsx'
import Content from './content.jsx'
import Footer from './footer.jsx'
import Products from './products.jsx'
import { Routes,Route } from 'react-router-dom'
export default function App() {
  return (
  <>
  <Header/>
  
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path='/counter' element={<Counter/>}/>
    <Route path='/content' element={<Content/>}/>
    <Route path='/products' element={<Products/>}/>
  </Routes>
  
  <Footer/>
  </>
  )
}