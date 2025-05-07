import React from 'react'
import NavBar from './components/navBar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
// import Contact from './pages/Contact'
import './../src/index.css'
import RootLayOut from './layout/RootLayOut'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactFomr from './components/ContactFomr'
import PagenotFouund from './components/PagenotFouund'
import JobsLayout from './layout/JobsLayout'
import Jobs, { JobsLoader } from './pages/Jobs'
import JobDetails, { JobDetailsLoader } from './pages/JobDetails'
import Error from './components/Error'

const App = () => {


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayOut/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<ContactLayout/>}>
       <Route path='info' element={<ContactInfo/>}/>
       <Route path='form' element={<ContactFomr/>}/>

      </Route>
      <Route path='products' element={<Products/>}/>
      <Route path='*' element={<PagenotFouund/>}/>
      <Route path='jobs' element={<JobsLayout/>} errorElement={<Error/>}>
      <Route index element={<Jobs/>} loader={JobsLoader}/>
      <Route path=':id' element={<JobDetails/>} loader={JobDetailsLoader}/>
      </Route>

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
