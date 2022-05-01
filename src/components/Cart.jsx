import React from 'react'
import { useCart } from 'react-use-cart'

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
    <div className="cart-container">
        
        <table>
        <tbody>
            {items.map((cartitem) => {
              return (

              <tr key={cartitem.id} >

                <td><img src={cartitem.image} style={{height:"6rem"}}></img></td>
                <td><h5 className='ItemName'>{cartitem.name}</h5></td>
                <td><h5 className='ItemPrice'>${cartitem.price}</h5></td>
                <td><h5 className='ItemQty'>x{cartitem.quantity}</h5></td>
                <td><button className='MinusBtn' onClick={() => updateItemQuantity(cartitem.id, cartitem.quantity -1)}>-</button></td>
                <td><button className='PlusBtn' onClick={() => updateItemQuantity(cartitem.id, cartitem.quantity +1)}>+</button></td>
                <td><button className='RemoveBtn' onClick={() => removeItem(cartitem.id)}>Remove items</button></td>
              
              </tr>

                )
            })}

        </tbody>
  </table>



    </div>
  )
}

export default Cart