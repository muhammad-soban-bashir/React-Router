import React from 'react'
import { useLoaderData } from 'react-router-dom'


const JobDetails = () => {

    const job = useLoaderData()
   
   return (
    <>
    <h1>{job.title}</h1>
    </>
  )
}

export default JobDetails

export const JobDetailsLoader = async ({params})=>{
    console.log(` params from detail loader ::: ${params}`)
 const {id} = params
 console.log(id)

 const res = await fetch(`http://localhost:5000/jobs/${id}`)
 if(!res.ok){
    throw Error("could not find route")
 }
 return res.json()
} 