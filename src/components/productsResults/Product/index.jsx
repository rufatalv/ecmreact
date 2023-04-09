import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({
  documentID,
  productThumbnail,
  productName,
  productPrice
}) => {
  if (!documentID || !productThumbnail || !productName ||
    typeof productPrice === 'undefined') return null;

  const configAddToCartBtn = {
    type: 'button'
  };

  return (
    <div className="product">
      <div className="thumb">
        <Link to={`/product/${documentID}`}><img src={productThumbnail} alt={productName} /></Link>
        
      </div>

      <div className="details">
        <ul>
          <li className='details-left'>
            <span className="name">
              {productName}
            </span>
            <span className="price">
              £{productPrice}
            </span>
          </li>

          <li>
            <div className="addToCart">
              <button className='button' {...configAddToCartBtn}>
                Add to cart
              </button>
            </div>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Product;