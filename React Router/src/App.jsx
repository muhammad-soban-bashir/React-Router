import React from 'react'
import NavBar from './components/navBar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import './../src/index.css'
import RootLayOut from './layout/RootLayOut'

const App = () => {


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayOut/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='products' element={<Products/>}/>
    </Route>
  ))
  return (
<RouterProvider router = {router}/>



    // <div>
    //   <NavBar/>
    //   <div className='container'>
    //   <Routes>
    //     <Route path='/' element={<Home/>}/>
    //     <Route path='/about' element={<About/>}/>
    //     <Route path='/products' element={<Products/>}/>
    //     <Route path='/contact' element={<Contact/>}/>
    //   </Routes>
    //   </div>
    // </div>
  )
}

export default App
