import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div>
        <h1>jobs opening</h1>
        <p>here is the list of jobs that are opened</p>
        <Outlet/>
    </div>
  )
}

export default JobsLayout