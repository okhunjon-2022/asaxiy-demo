import React from 'react'
import "./Kabinet.css"
import CreateProduct from "../kabinet/create-product/CreateProduct"
import ManageProduct from "../kabinet/manage-product/ManageProduct"
import { Route, Routes, NavLink } from "react-router-dom"
import Home from "../home/Home"
import CreateSwiper from './create-swiper/CreateSwiper'
import ManageSwiper from './manage-swiper/ManageSwiper'
import { useDispatch } from "react-redux"
import { LOG_OUT } from "../../content1/action/actionType"

function Admin() {
  const dispatch = useDispatch()
  let activeStyle = {
    textDecoration: "none",
    background: "#fff",
    color: "#000",
    padding: "5px 20px",
    borderRadius: "5px"
  };
  return (
    <div className='admin'>
      <div className="admin__sidebar">
        <h2>Admin Dashboard</h2>
        <ul className='admin__collections'>
          <li className='admin__item'>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to={"create-product"}>Create Product</NavLink>
          </li>
          <li className='admin__item'>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to={"create-swiper"}>Create Swiper</NavLink>
          </li>

          <li className='admin__item'>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to={"manage-product"}>Manage Product</NavLink>
          </li>
          <li className='admin__item'>
            <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to={"manage-swiper"}>Manage Swiper</NavLink>
          </li>


          <NavLink style={({ isActive }) =>
            isActive ? activeStyle : undefined
          } to={"/"} element={<Home />}><button className='admin__btn'>Go to home</button> </NavLink>
        </ul>
        <button className='admin__btn'  onClick={()=>dispatch({type:LOG_OUT,state:null})}>Log out</button>
      </div>
      <div className="admin__content">

        <Routes>
          <Route path='/create-product' element={<CreateProduct />} />
          <Route path='/create-swiper' element={<CreateSwiper />} />
          <Route path='/manage-product' element={<ManageProduct />} />
          <Route path='/manage-swiper' element={<ManageSwiper />} />
        </Routes>
      </div>


    </div>
  )
}

export default Admin