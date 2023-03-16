import React, { useEffect, useState } from 'react'
import "./Products.css"
import "./ProMedia.css"
import { CiStar } from "react-icons/ci"
import axios from '../../api'
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { } from "number-brm"


import { ADD_TO_HEART, REMOVE_FROM_HEART, INC_CART } from "../../content1/action/actionType"

function Products({ admin }) {


  const [data, setData] = useState([])
  const [filter, setFilter] = useState([data])
  const [del, setDelete] = useState(false)
  const heart = useSelector(s => s.heart)

  const dispatch = useDispatch()
  // console.log(heart);


  useEffect(() => {
    axios.get("/product").then(res => {
      // console.log(res)
      setData(res.data.innerData)
      setFilter(res.data.innerData)
    })
      .catch(err => console.log(err))
  }, [del])

  // console.log(data);

  const deleteProduct = (id) => {
    axios.delete(`/product/${id}`)
      .then(res => {
        console.log(res)
        setDelete(!del)
      })
      .catch(err => console.log(err))
  }

  // const filterProduct = (cate) => {
  //   const updatedList = data.filter((i) => i?.category === cate)
  //   setFilter(updatedList)
  // }

  const addToHeart = (pro) => {
    const index = heart.findIndex(i => i._id === pro._id)
    if (index === -1) {
      dispatch({ type: ADD_TO_HEART, payload: [...heart, pro] })
    }
  }
  // console.log(dispatch);

  const removeFromHeart = (_id) => {

    dispatch({ type: REMOVE_FROM_HEART, payload: _id })

  }


  return (
    <div className='home'>
      {/* <div className="home__btns">
        <button onClick={() => setFilter(data)}>Barchasi</button>
        <button onClick={() => filterProduct("phone")}>Telefonlar</button>
        <button onClick={() => filterProduct("tv")}>Televizorlar</button>
        <button onClick={() => filterProduct("laptop")}>Kompyuterlar</button>
        <button onClick={() => filterProduct("watch")}>Soatlar</button>
        <button onClick={() => filterProduct("electrnic")}>Maishiy texnika</button>
      </div> */}
      {
        !data.length ? "Loading" : <div className="container   home__products">


          {
            filter?.map((value) => (
              <div key={value._id}
                className="products__wrapper">

                <NavLink to={`/uniquePage/${value._id}`} className="product__image">
                  <img src={value?.url} alt="" />
                </NavLink>



                <h6 className='product__desc'>{value?.desc}</h6>
                <p className='product__rate'>
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </p>
                <p className='product__oldPrice'>{(value?.price * 0.015 + value.price).brm()} so'm</p>
                <p className='product__finalPrice'>{value?.price.brm()} so'm
                </p>
                <p className='product__finalPrice'>{Math.floor(value?.price / 12).brm()} so'm oyiga</p>

                <div className="product__carts">
                  {
                    admin ?
                      <>
                        <button className='edited'><AiOutlineEdit /></button>
                        <button onClick={() => deleteProduct(value._id)} className='delete'><AiOutlineDelete /></button>
                      </>
                      :
                      <>
                        <span>
                          <button onClick={() => dispatch({ type: INC_CART, payload: value })} className='add-to-cart' ><img width={20} src="https://asaxiy.uz/custom-assets/images/icons/header/cart.svg" alt="" /></button>
                        </span>

                        {
                          heart?.some(i => i._id === value._id) ?
                            <span onClick={() => removeFromHeart(value._id)}>
                              <img width={20} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" alt="" />
                            </span>
                            :
                            <span onClick={() => addToHeart(value)}>
                              <img width={20} src="https://asaxiy.uz/custom-assets/images/icons/header/heart.svg" alt="" />
                            </span>

                        }

                      </>
                  }

                </div>

                <div className="btn__wrapper">
                  <NavLink to={`/uniquePage/${value._id}`}>
                    <button className='btn__buy'>Sotib olish</button>
                  </NavLink>
                </div>
              </div>
            ))
          }

        </div>
      }




    </div>
  )
}



export default Products