import React, { useState } from 'react'
import "./CreateProduct.css"
import axios from "../../../api"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


let initialState = {
  title: "",
  price: "",//+string => number
  url: "",
  desc: "",
  category: "phone"
}

function CreateProduct() {
  const [data, setData] = useState(initialState)
  const [loading,setLoading] = useState(false)

  const createPro = e => {
    e.preventDefault()
    setLoading(true)


    // console.log(data);
    axios.post("/product",data)
    .then(res=>{
      console.log(res)
      setData(initialState)
      setLoading(false)
      toast.success(`${res.data.msg}`)
    })
    .catch(res=>{
      console.log(res)
      setLoading(false)
      toast.error(`${res.response.data.msg}`)
    })


  }


  return (
    <div className='create__product create__swiper'>
      <h2 className='create__pro-title'>CreateProduct</h2>
      <form className='create__form' onSubmit={createPro} action="">

        <input value={data.title} onChange={e => setData({ ...data, title: e.target.value })} type="text" placeholder='title' />

        <input value={data.price} onChange={e => setData({ ...data, price: +e.target.value })} type="number" placeholder='price' />

        <input value={data.url} onChange={e => setData({ ...data, url: e.target.value })} type="text" placeholder='url' />

        <input value={data.desc} onChange={e => setData({ ...data, desc: e.target.value })} type="text" placeholder='desc' />

        <select value={data.category} onChange={e => setData({ ...data, category: e.target.value })} name="" id="">

          <option value="phone">Telefon</option>
          <option value="tv">Televizor</option>
          <option value="laptop">Kompyuter</option>
          <option value="watch">Soat</option>
          <option value="electronic">Maishiy texnika</option>
        </select>

        <button disabled={loading} className='create__pro-btn'>{loading ? "Loading" : "Create Product"}</button>
        
      </form>
      <ToastContainer/>
    </div>
  )
}

export default CreateProduct