import React, { useEffect, useState } from 'react'
import { useParams ,NavLink} from "react-router-dom"
import {useDispatch} from "react-redux"
import axios from '../../api'
import "./uniquePage.css"
import "./UniqueMedia.css"
import {BsTelegram,BsFacebook,BsInstagram,BsWhatsapp} from "react-icons/bs"
import {AiFillHeart}from "react-icons/ai"
import {} from "number-brm"
import {INC_CART} from "../../content1/action/actionType"

function UniquePage() {
  const { proID } = useParams()
  const [unique, setUnique] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("/product")
      .then(res => {
        // console.log(res);
        setUnique(res.data.innerData)
      })
      .catch(err => console.log(err))
  }, [])
  // console.log(unique);

  const findPro = unique?.find((i) => i._id === proID)
  // console.log(findPro);


  return (
    <div className='uniquePage '>
      <div className="container uniquePage_main">
        <div className="uniquePage__img">

          <a href={findPro?.url}><img src={findPro?.url} alt="" /></a>

      
           <button><AiFillHeart/></button>
          
        </div>


        <div className="uniquePage__text">
          <h3>{findPro?.desc}</h3>

          <p className="uniquePage__oldPrice">
          {(findPro?.price * 0.015 + findPro?.price ).brm()} so'm
          </p>
          <p className="uniquePage__finalPrice">
            {findPro?.price.brm()} so'm
          </p>
          <p className="uniquePage__star">
             <i className="fa-solid fa-star"></i>
             <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </p>
          <p className='uniquePage__state'> Holati : <span>Sotuvda bor</span></p>
          <p className="uniquePage__ulanish">
           Ulanish:  
           <span><BsTelegram/></span>
           <span><BsFacebook/></span>
           <span><BsInstagram/></span>
           <span><BsWhatsapp/></span>
          </p>

           <NavLink to={`/cart`}>
           <button onClick={() => dispatch({ type: INC_CART, payload: findPro }) }className='uniquePage__buy'> Sotib olish</button>
            </NavLink>
        </div>

      </div>


    </div>
  )
}

export default UniquePage