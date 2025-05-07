import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Jobs = () => {
    const jobs = useLoaderData()
    console.log(jobs)

    
  return (
    <div>
    {jobs.map((job)=>(<Link to={job.id.toString()}  key={job.id}>
    {job.title}
</Link>))}
    </div>
  )
}

export default Jobs

 export const JobsLoader = async ()=>{
  const res = await fetch("http://localhost:5000/jobs")
  console.log(res)
  return res.json()
}
