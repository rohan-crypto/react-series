import React, { useEffect, useState } from 'react'
//using this hook to use loader
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    // Normal method to fetch API
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/rohan-crypto')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    // using useLoaderData hook to fetch data directly
    const data = useLoaderData();

  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4 flex flex-col'>
      Github followers: {data.followers}
      <img className='mx-auto my-6' src={data.avatar_url} alt="profile pic" width={300}/>
    </div>
  )
}

export default Github

// using this to directly call api using loader in react-router-dom
export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/rohan-crypto');
    return res.json();
}