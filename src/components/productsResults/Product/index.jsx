import React from 'react';

const Product = ({
  productThumbnail,
  productName,
  productPrice
}) => {
  if (!productThumbnail || !productName ||
    typeof productPrice === 'undefined') return null;

  const configAddToCartBtn = {
    type: 'button'
  };

  return (
    <div className="product">
      <div className="thumb">
        <img src={productThumbnail} alt={productName} />
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