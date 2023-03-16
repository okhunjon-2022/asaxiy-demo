import React, { useState, useEffect } from 'react'
import axios from "../../../api"
import "./ManageSwiper.css"



function ManageSwiper() {
  const [data, setData] = useState([])
  const [del,setDelete] =useState(false)

  useEffect(() => {
    axios.get("/swiper").then(res => {
      // console.log(res)
      setData(res.data.innnerData)
    })
      .catch(err => console.log(err))
  }, [del])
  // console.log(data);

  const deleteSwiper=(id)=>{
    axios.delete(`/swiper/${id}`)
    .then(res=>{
      console.log(res)
      setDelete(!del)
    })
    .catch(err=>console.log(err))
  }

  return (
    <div className="manage__swiper">
      <h1>Manage Swiper</h1>

      {
        data?.map((value) => (
          <div key={value._id} className="manage__wrapper">
          
              <div className="man__image">
                <img src={value?.url} alt="" />
              </div>
              <div className="man__info">
                <div className="man__title">
                  <h2>Title</h2>
                  <p>{value?.title}</p>
                </div>
                <div className="man__desc">
                  <h2>Desc</h2>
                  <p>{value?.desc}</p>
                </div>
                <button className='create__pro-btn' onClick={()=>deleteSwiper(value._id)}>Delete</button>

                
              


              </div>
          

          </div>
        ))
      }



    </div>
  )
}

export default ManageSwiper