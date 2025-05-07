import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
  return (
    <div>
        <h1>an error occered</h1>
        <p> message:{error.message}</p>
    </div>
  )
}

export default Error