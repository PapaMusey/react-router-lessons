import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

const navigate = useNavigate()

  return (
    <div className='job-details'>
        <h2>404 | Page not found</h2>
        <button onClick={()=>navigate('/')}>Go to Home</button>
    </div>
  )
}

export default NotFound
