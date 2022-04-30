import React from 'react'
import data from './Productdata'

const Products = () => {
  return (
<div>
    <h2>Exempel på produkter</h2>
        <div id="product-container">
            {data.Items.map((product) => {
            return (
                <div key={product.id} item={product} className="products">
                    <img
                        src={product.image}
                        alt={product.name}
                        width="100"
                        height="100"
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