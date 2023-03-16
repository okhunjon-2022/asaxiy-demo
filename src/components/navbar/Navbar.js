import React from 'react'
import "./Navbar.css"
import { HiSearch } from "react-icons/hi"
import logo from "../../assets/asaxiy-logo.svg"
import { NavLink, useLocation } from "react-router-dom"
import "./NavMedia.css"
import { useSelector } from "react-redux"


function Navbar() {
  const state = useSelector((state) => state.heart)
  const cart = useSelector((state) => state.cart)

  const { pathname } = useLocation()
  if (pathname.includes("admin") || pathname.includes("login")) {
    return <></>
  }
  return (
    <div className='navbar'>
      <div className="navbar__wrapper container">
        <NavLink to="/" className="nav_logo">
          <img src={logo} alt="" />
        </NavLink>
        <div className="nav__search">
          <input placeholder='Qidiruv...' type="search" />
          <div className="input__icons">
            <HiSearch />
            <p>Qidiruv</p>
          </div>
        </div>

        <ul className="nav__collections">
          <NavLink to="/payment" className="nav__items">
            <img width={30} src="https://asaxiy.uz/custom-assets/images/icons/header/payment.svg" alt="" />
            <span>To'lov</span>
          </NavLink>
          <NavLink to="/traker" className="nav__items">
            <img width={30} src="https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg" alt="" />
            <span>Trek</span>
          </NavLink>
          <NavLink to="/cart" className="nav__items">
            <div className="nav__like">
              <img width={25} src="https://asaxiy.uz/custom-assets/images/icons/header/cart.svg" alt="" />
              <h4>{cart.length}</h4>
            </div>
            <span>Savatcha </span>
          </NavLink>
          <NavLink to="/wishLike" className="nav__items">
            <div className="nav__like">
              <img width={30} src="https://asaxiy.uz/custom-assets/images/icons/header/heart.svg " alt="" />
              <h4>{state.length}</h4>
            </div>
            <span>Sevimlilar</span>
          </NavLink>
          <NavLink to="/login" className="nav__items">
            <img width={20} src="https://asaxiy.uz/custom-assets/images/icons/header/avatar.svg" alt="" />
            <span>Kabinet</span>
          </NavLink>

        </ul>

      </div>
    </div>
  )
}

export default Navbar