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





// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function App(){
//   const [data , setData] = useState(null)
//   const [error , setError] = useState(false)
//   const [loading , setLoading] = useState(true)

//   useEffect(()=>{
//     getData()

//   } , [])

//   async function getData(){
//     try {
//       const res = await axios('https://dummyjson.com/products')
//     console.log(res.data);
//     setData(res.data.products)  
//     } catch (error) {
//       console.log(error);
//       setError(true)
//     } finally {
//       setLoading(false)
//     }
//     }

//   return(
//     <>
//     <h1 className="text-center text-3xl m-2 p-2">Hello world</h1>

//     {loading && <h1>Loading...</h1>}

//     {data && data.map(item => {
//         <div key={item.id} className="card bg-base-100 w-96 shadow-sm m-4 p-4 border border-gray-300 rounded-lg">
//           <div className="card-body">
//             <h2 className="card-title text-xl font-bold">{item.title}</h2>
//             <p className="text-gray-700">{item.description}</p>
//           </div>
//         </div>
//       })}

//     {error && <h2 className="text-red-500">Error occured</h2>}
//     </>
//   )
// }

// export default App

// import React from "react"
// import { useState } from "react"

// function App(){
//   const [counter , setCounter] = useState(0)
//   const [counter2 , setCounter2] = useState(0)



//   return (
// <>
//   <h1>Counter {counter}  {counter2}</h1>

//   <button onClick={()=> setCounter(counter+1)}>Add</button><br /><br />
//   <button onClick={()=> setCounter2(counter2+2)}>Add</button>
//   </>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react'
import Card from './card'

const App = () => {

  const [show , setShow] = useState(false)

  function onCard(){
    setShow(!show)
  }

  return (
    <>
    <h1>App</h1>
    <button onClick={onCard}>{show ? 'Show' : 'Hide'} Card</button>
    {!show && <Card/>}
    </>
  )
}


export default App