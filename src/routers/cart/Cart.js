import React, { useState } from 'react'
import "./Cart.css"
import { useSelector, useDispatch } from "react-redux"
import { INC_CART, DEC_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART } from "../../content1/action/actionType"
import { GoPlus, } from "react-icons/go"
import { TbMinus } from "react-icons/tb"
import { AiOutlineHeart } from "react-icons/ai"
import { } from "number-brm"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const BOT__TOKEN = "5698091145:AAHfzdcl-qspBv0z2F_X3lniFkVr3-IGcE0"
const CHAT_ID = "-964919484"

let initialState = {
  name: "",
  phone: "",//+string => number
  address: ""
}

function Cart() {
  function showToastMessage () {
    toast.success('Success Notification !', {
      position: toast.POSITION.BOTTOM_CENTER})
  }

  const [data, setData] = useState(initialState)

  const searchPro = (e) => {
    e.preventDefault()
    let text = "Buyurtma %0A";
    text += `Ism: ${data.name} %0A`
    text += `Tel Raqam: ${data.phone} %0A`
    text += `Manzili: ${data.address} %0A%0A`
    text += `Xaridlar %0A%0A`



    cart.forEach((item) => {
      text += `Nomi : ${item.title} %0A`
      text += `Narxi : ${item.price} %0A`
      text += `Soni : ${item.soni} %0A%0A`
    })
    text += `Jami: ${cart?.reduce((a, b) => a + (b.price * b.soni), 0).brm()}  so'm`

    let url = `https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send()
    



    setData(initialState)
    dispatch({ type: REMOVE_ALL_FROM_CART })

  }

  const cart = useSelector(s => s.cart)
  // console.log(cart);
  const dispatch = useDispatch()

  




  return (
    <>
      {
        
          <div className='main__cart'>
            <div className="container">
              <div>
                <h1>
                  Savatingizda {cart.length} ta mahsulot bor
                </h1>
                <h1 className='total'>Jami:{
                  cart.reduce((a, b) => a + (b.price * b.soni), 0).brm()
                } so'm</h1>
              </div>

              <div className="left__cart">
                {
                  cart?.map(v => (
                    <div key={v._id} className="left__cart-wrapper">
                      <div className="left__cart-img">
                        <img width={120} src={v.url} alt="" />
                      </div>
                      <div className="left__cart-text">
                        <h4>{v?.desc}</h4>
                      </div>
                      <div className="left__cart-qty">
                        <div className="quantites">
                          <button disabled={v.soni <= 1} onClick={() => dispatch({
                            type: DEC_CART, payload: v
                          })} className='qty__minus'><TbMinus /></button>
                          <span>{v?.soni}</span>
                          <button onClick={() => dispatch({
                            type: INC_CART, payload: v
                          })} className='qty__plus'><GoPlus /></button>
                        </div>
                      </div>

                      <div className="left__cart-price">
                        <p> {(v?.price * v?.soni).brm()} so'm</p>
                        <div className="left__cart-btns">
                        <button><AiOutlineHeart /></button>
                        <button onClick={() => dispatch({
                          type: REMOVE_FROM_CART, payload: v
                        })} >Remove</button>
                      </div>
                      </div>

                      

                    </div>
                  ))
                }
              </div>
              <div className="right__cart">
                <form onSubmit={searchPro} className='right__form' action="">
                  <input required value={data.name} onChange={e => setData({ ...data, name: e.target.value })} placeholder='name' type="text" />
                  <input required value={data.phone} onChange={e => setData({ ...data, phone: e.target.value })} placeholder='tel' type="number" />
                  <input required value={data.address} onChange={e => setData({ ...data, address: e.target.value })} placeholder='address' type="text" />

                  <button onClick={showToastMessage} className='uniquePage__buy' disabled={!cart.length} >Buyurtma berish</button>

                </form>
                <ToastContainer />
              </div>









            </div>


            {/* <div className="left__cart">

        {
          cart?.map(v => (
            <div key={v._id} className="left">
              <div className="left__cart-product">
                <h1 className='cart__title'>Product</h1>

                <div className="cart__product-wrapper">

                  <div className="cart__pro-image">
                    <img width={150} src={v?.url} alt="" />
                  </div>

                  <div className="cart__pro-title">
                    <div className="cart__pro-desc">
                      <h4>{v?.desc}</h4>
                    </div>
                    <div className="cart__pro-category">{v?.category}</div>
                  </div>

                </div>

              </div>
              <div className="left__cart-quantity">
                <h1 className='cart__title'>Quantity</h1>

                <div className="cart__btns">
                  <button  className='btn__minus'><TbMinus /></button>
                  <span></span>
                  <button className='btn__plus'><GoPlus /></button>
                </div>

              </div>
              <div className="left__cart-price">
                <h1 className='cart__title'>Price</h1>

                <div className="cart__prices">
                  <div className="cart__oldPrice">{(v?.price * 0.015 + v.price) * v.soni.brm()} so'm</div>
                  <div className="cart__finalPrice">{v?.price * v.soni.brm()} so'm</div>
                  <div className="cart__perMonth">{Math.floor(v?.price / 12) * v.soni.brm()} so'm oyiga</div>
                </div>

              </div>

              <div className="left__cart-btns">
                <button className='cart__heart'><AiOutlineHeart /></button>
                <button className='cart__remove'>Remove</button>
              </div>
            </div>
          ))
        }
      </div>
      <div className="right__cart">

        <div className="cart__total">
          <h3></h3>
          
        </div>
      </div> */}














            {/* <h1>Cart</h1>
          <h1>TOTAL </h1>
          <h1>
            {
              cart.reduce((a, b) => a + (b.price * b.soni), 0).brm()
            } 
            </h1>

          {
            cart?.map(i => <div key={i._id}>
              <img width={250} src={i.url} alt="" />
              <h2>{i.title}</h2>
              <button onClick={() => dispatch({
                type: INC_CART, payload: i
              })}>inc</button>
              <span>{i.soni}</span>
              <button disabled={i.soni <= 1} onClick={() => dispatch({
                type: DEC_CART, payload: i
              })}>dec</button>
              <button onClick={() => dispatch({
                type: REMOVE_FROM_CART, payload: i
              })}>delete</button>
            </div>)
          } */}




          </div>
      }
    </>


  )
}

export default Cart