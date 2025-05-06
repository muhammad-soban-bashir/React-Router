import React from 'react'
import NavBar from '../components/navBar'
import { Outlet } from 'react-router-dom'

function RootLayOut() {
  return (
    <div>
        <NavBar/>
        <div className="container">
        <Outlet/>
        </div>
        
    </div>
  )
}

export default RootLayOut