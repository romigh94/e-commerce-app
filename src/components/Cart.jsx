import React from 'react'
import { useCart } from 'react-use-cart'
import { VscAdd, VscChromeMinimize } from "react-icons/vsc";
import { GrTrash } from "react-icons/gr";

const Cart = () => {


    const { 

        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,

    } = useCart()

 
 if (isEmpty) return <h2 className="CartEmpty">Your cart is empty...</h2>



  return (
<section>
    <h2>Shopping bag</h2>
    <div className="cart-container">
        
            {items.map((cartitem) => {
              return (

              <div className="cart-card" key={cartitem.id}>

               <img src={cartitem.image} style={{width:"6rem"}}></img>
               <h4 className='ItemName'>{cartitem.name}</h4>
                <h4 className='ItemPrice'>{cartitem.price} kr</h4>
                <button className='MinusBtn' onClick={() => updateItemQuantity(cartitem.id, cartitem.quantity -1)}><VscChromeMinimize /></button>
                <h4 className='ItemQty'>{cartitem.quantity}</h4>
                <button className='PlusBtn' onClick={() => updateItemQuantity(cartitem.id, cartitem.quantity +1)}><VscAdd /></button>
                <button className='RemoveBtn' onClick={() => removeItem(cartitem.id)}><GrTrash /></button>
              
            </div>
          )
          }
            )}

            <div className='totalPrice'>
              <h3>Total price: {cartTotal} kr</h3>
            </div>
    </div>
</section>
  )
}

export default Cart