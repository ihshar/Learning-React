import React, { useEffect,useState } from 'react'
import { useLoaderData} from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ihshar')
    //     .then(res=>res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // })
  return (
    <>
        <img src={data.avatar_url} alt="Git Picture" width={300}></img>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followes: {data.followers}</div>
    </>
  )
}

export default Github

export const getGithubLoader = async() =>{
    const response = await fetch('https://api.github.com/users/ihshar')
    return response.json();
}