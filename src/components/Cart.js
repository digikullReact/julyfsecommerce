import React from 'react'

const Cart = (props) => {
   
  return (
   <>
             <img src="cart.png" width={"50px"} height={"50px"}/> <span>{props.cart.length}</span>

   </>
  )
}

export default Cart