import React from 'react'
import data from './Productdata'
import { useCart } from 'react-use-cart'



const Products = () => {

const {addItem} = useCart();

  return (
<div>
    <h2>Examples of products</h2>
        <div id="product-container">
            {data.Items.map((product) => {
            return (
                <div key={product.id} item={product} className="product-card">
                    <img
                        src={product.image}
                        alt={product.name}
                        width="200"
                        height="200"
                        className="item-img"
                        ></img>
                        <h5>{product.name}</h5>
                        <p className="item-price">{product.price} kr</p>
                    <button className="to-cart-btn">
                        Add to cart
                    </button>
                </div>
          )
        })}
    </div>
</div>
  )
}

export default Products