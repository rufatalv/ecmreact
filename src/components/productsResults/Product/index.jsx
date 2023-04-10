import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from '../../../redux/cart/cart.actions';

const Product = (product) => {
  const dispatch = useDispatch();
  const {documentID, productThumbnail, productPrice, productName} = product;
  if (!documentID || !productThumbnail || !productName ||
    typeof productPrice === 'undefined') return null;

  const configAddToCartBtn = {
    type: 'button'
  };
  const handleAddToCart = (product) => {
    if(!product) return;
    dispatch(addProduct(product))
  }

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
              <button className='button' {...configAddToCartBtn} onClick={() => {handleAddToCart(product)}}>
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