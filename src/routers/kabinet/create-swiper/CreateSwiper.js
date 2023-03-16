import React, { useState } from 'react'
import axios from "../../../api"
import "./CreateSwiper.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



let initialState = {
  url: "",
  title: "",
  desc: ""
}

function CreateSwiper() {
  const [data, setData] = useState(initialState)
  const [loading,setLoading] = useState(false)
  // console.log(data);


  const createSwiper =e=>{
    e.preventDefault()

    axios.post("/swiper",data)
    .then(res=>{
      console.log(res);
      setData(initialState)
      setLoading(false)
      toast.success(`${res.data.msg}`)
    })
    .catch(err=>{
      console.log(err);
      setLoading(false)
      toast.error(`${err.response.data.msg}`)
    })

  }

  return (
    <div className='create__swiper'>
      <h2>CreateSwiper</h2>
      <form className='create__form' onSubmit={createSwiper} action="">
        <input value={data.url} onChange={e=>setData({...data,url:e.target.value})} type="text" placeholder='Url'/>
        <input value={data.title} onChange={e=>setData({...data,title:e.target.value})} type="text" placeholder="Title"/>
        <input value={data.desc} onChange={e=>setData({...data,desc:e.target.value})} type="text" placeholder='Desc' />

        <button className='create__swipe-btn'  disabled={loading}>{loading ? "Loading" : "Create Swiper"}</button>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default CreateSwiper