import React from "react";
import ProductRating from "./productRating/ProductRating";
import sponsoredLabel from "./sponsored.svg";
import "./ProductDetails.scss";

const ProductDetails = ({ title, price, originalPrice, saveAmount, deliveryDate, stock, rating }) => {
    
  return (
    <div className="product-details-column">
      <div className="product-details">
        <div className="sponsored-label">
          <span>Sponsored</span>
          <img src={sponsoredLabel} alt="Sponsored icon" />
        </div>
        <h1 className="product-title">
          {title}
        </h1>
        <ProductRating rating={rating} />
        <div className="limited-time-deal">Limited time deal</div>
        <div className="product-price">
          {price} <span className="original-price">{originalPrice}</span>{" "}
          <span className="save-text">Save</span>{" "}
          <span className="save-amount">{saveAmount}</span>
        </div>
        <div className="delivery-info">
          <span>Get it by</span> <strong>{deliveryDate}</strong>
        </div>
        <div className="free-delivery">FREE Delivery by Amazon</div>
        <div className="stock-info">{stock}</div>
      </div>
    </div>
  );
};

export default ProductDetails;
