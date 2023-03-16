import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import "./WishLike.css"
import { REMOVE_FROM_HEART } from "../../content1/action/actionType"

function WishLike() {
  const pro = useSelector(i => i.heart)

  const dispatch = useDispatch()
  // console.log(pro);



  const removeFromHeart = (_id) => {
    dispatch({ type: REMOVE_FROM_HEART, payload: _id })
  }
  return (
    <div className='wishList'>
      <div className="container">

        {

          pro.length === 0 ? <h1 className='empty'>"Hech narsa yo'q"</h1> :
            pro?.map(v => (
              <div key={v._id}
                className="wishList__wrapper">
                <h1 className='wish__title'>Sevimlilar</h1>
                <div className="wish__image">
                  <img width={120} src={v?.url} alt="" />
                </div>
                <div className="wish__desc">
                  {v?.desc}
                </div>
                <div className="wish__price">
                  <h4 className="wish__oldPrice">{v?.price * 0.015 + v.price} so'm  </h4>
                  <h4 className="wish__finalPrice">{v?.price} so'm</h4>
                  <h4 className="wish__perMoth">{Math.round(v?.price / 12)} so'm oyiga</h4>
                </div>
                <div className="wihs_btns">
                  <button className='wish__addToCart'>Savatchaga qo'shish</button>
                  <button onClick={() => removeFromHeart(v._id)} className='wish__delete'>O'chirish</button>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default WishLike