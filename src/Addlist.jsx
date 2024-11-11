import React, { useState } from 'react'
import axios from 'axios'

export const Addlist = () => {

  const [data,setData]=useState('');

  let handleChange=(event)=>{
    setData({ ...data,[event.target.name]:event.target.value});

  }

  let handleSubmit=async(event)=>{
    event.preventDefault();
    let response = await axios.post(`http://localhost:4000/user/addtodo/`,data)
    console.log(response);
    setData(response.data)
  }


  return (
    <div className='bg-slate-500 h-screen'><br /><br /><br /><br />
    <div className='bg-cyan-400 w-2/4 h-auto p-8 pl-20  ml-96 items-center  rounded-2xl'>
    <div className='text-black '>
     <h1 className='text-4xl font-bold text-red-600 text-center'>Todo List</h1><br />
     <label className='text-3xl '>Name</label><br />
     <input className='gap-44 w-auto h-10 rounded-lg' type="text" onChange={handleChange}  name='name' class='border-amber-50' placeholder='Name' /> <br /><br />
     <label className='text-3xl ' >Title</label><br />
     <input className='gap-44 w-50 h-10 rounded-lg' type='text' onChange={handleChange} name='title' placeholder='Title' /><br /><br />
     <label className='text-3xl '>Description</label><br />
     <input className='gap-44 w-50 h-10 rounded-lg' type='text' onChange={handleChange} name='description' placeholder='Description' /><br /><br />

     <button type='submit' onClick={handleSubmit} className='bg-green-700 p-3 ml-28 mb-5 rounded'>ADD</button> <br />
     
  </div>
  </div>
  </div>
  )
}
