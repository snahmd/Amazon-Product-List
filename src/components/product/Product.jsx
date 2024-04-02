import React from 'react'
import ProductImage from './productImage/ProductImage'
import ProductDetails from './productDetails/ProductDetails'
import './Product.scss'

const Product = ({ image, title, price, originalPrice, saveAmount, deliveryDate, stock, rating }) => {
  return (
    <div className="product-card">
        <div className="product-card-inner">
            <div className="product-card-content">
                <ProductImage src={image} alt={title} />
                <ProductDetails title={title} price={price} originalPrice={originalPrice} saveAmount={saveAmount} deliveryDate={deliveryDate} stock={stock} rating={rating} />
            </div>
        </div>
    </div>
  )
}

export default Product