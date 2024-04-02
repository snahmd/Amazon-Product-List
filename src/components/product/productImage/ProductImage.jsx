import React from "react";
import "./ProductImage.scss";

const ProductImage = ({src, alt}) => {
  return (
    <div className="product-image-column">
      <div className="product-image">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default ProductImage;
