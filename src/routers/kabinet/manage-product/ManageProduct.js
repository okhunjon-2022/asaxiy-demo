import React from 'react'
import Product from "../../../components/products/Products"

function ManageProduct() {
  return (
    <div>
      <h2>Manage Product</h2>
      <Product admin={true}/>
    </div>
  )
}

export default ManageProduct