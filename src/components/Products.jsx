import React from 'react'
import data from './Productdata'
import { useCart } from 'react-use-cart'



const Products = () => {

const { addItem } = useCart();

  return (
<div>
    <h2>Different types of products</h2>
        <div className="product-container">
            {data.Items.map((product) => {
            return (
                <div key={product.id} item={product} className="product-card">
                    <img src={product.image} alt={product.name}
                    width="220" height="200" className="item-img" />
                    <h3>{product.name}</h3>
                    <p className="item-price">{product.price} kr</p>
                <button className="to-cart-btn" onClick={() => addItem(product)}>Add to cart</button>
                </div>
          )
        })}
    </div>
</div>
  )
}

export default Products