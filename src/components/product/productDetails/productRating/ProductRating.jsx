import React from 'react'
import starFull from './statics/starFull.svg'
import starHalf from './statics/starHalf.svg'
import starEmpty from './statics/starEmpty.svg'
import expand from './statics/expand.svg'
import './ProductRating.scss'

const ProductRating = ({ rating }) => {
  return (
    <div className="product-rating">
        <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => {
            if (rating >= star) {
                return <img key={star} src={starFull} alt="Rating star" />
            } else if (rating + 1 > star) {
                return <img key={star} src={starHalf} alt="Rating star" />
            } else {
                return <img key={star} src={starEmpty} alt="Rating star" />
            }
            })}
        </div>
        <div className="rating-count">
            <img src={expand} alt="User icon" />
            <span>23</span>
        </div>
    </div>
  )
}

export default ProductRating