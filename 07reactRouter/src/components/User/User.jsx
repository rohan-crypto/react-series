import React from 'react'
// we have to receive param from URL and display it in Component, 
// use useParams to show data dynamically from URL
import { useParams } from 'react-router-dom'

const User = () => {

    // whatever name we received from path in URL as param, we have to use exact same name
    const {userid} = useParams();

  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
      <h1>User: {userid}</h1>
    </div>
  )
}

export default User
