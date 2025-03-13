// import { useEffect, useState } from 'react'

// function App() {
//   const [data , setData] = useState(null)

//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(res =>{
//     console.log(res);
//     setData(res)
//     })
//     .catch((err)=>{
//       console.log(err);
//     })
//   } , [])
//   return (
//     <>
//       <h1>Hello world!</h1>

//       {data && data.map((item)=>{
//         return <p key={item.id}>{item.name}</p>
//       })}

//     </>
//   )
// }

// export default App





import axios from "axios";
import React, { useEffect, useState } from "react";

function App(){
  const [data , setData] = useState(null)
  const [error , setError] = useState(false)
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
    getData()

  } , [])

  async function getData(){
    try {
      const res = await axios('https://jsonplaceholder.typicode.com/users')
    console.log(res.data);
    setData(res.data)
    } catch (error) {
      console.log(error);
      setError(true)
    } finally {
      setLoading(false)
    }
    }

  return(
    <>
    <h1>Hello world</h1>

    {loading && <h2>Loading...</h2>}

    {data && data.map((item)=>{
      return <div style={{
        border:"1px solid black",
        borderRadius:"10px",
        margin:'10px',
        padding:'10px'
      }} key={item.id}>
        <p><b>Name: </b>{item.name}</p>
        <p><b>Username: </b>{item.username}</p>
        <p><b>Email: </b>{item.email}</p>
      </div>
    })}

    {error && <h2>Error occured</h2>}
    </>
  )
}

export default App