import React from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { addProduct, reduceCartItem, removeCartItem } from "../../../redux/cart/cart.actions";
const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addProduct(product));
  };
  const handleRemoveCartItem = (documentID) => {
    dispatch(
      removeCartItem({
        documentID,
      })
    );
  };
  const handleReduceItem = (product) => {
    dispatch(
      reduceCartItem(product)
    );
  }

  return (
    <div className="cartItem">
      <div className="cartItem-inner">
        <div className="cartItem-thumb">
          <img src={product.productThumbnail} alt="" srcSet="" />
        </div>
        <div className="cartItem-controls">
          <div
            className="control add"
            onClick={() => {
              handleAddToCart(product);
            }}
          >
            +
          </div>
          <div className="control reduce" onClick={() => {handleReduceItem(product)}}>-</div>
        </div>
        <div className="cartItem-details">
          <Link to={"/"}>{product.productName}</Link>
          <div className="cartItem-specs">
            <div>
              <span className="spec-title">Quantity</span>
              <h5 className="my-0">{product.quantity}</h5>
            </div>
            <div>
              <span className="spec-title">Size</span>
              <h5 className="my-0">28 mm</h5>
            </div>
            <div>
              <span className="spec-title">Color</span>
              <div className="background-color: rgb(0, 0, 0); width: 15px; height: 15px; border-radius: 50%;"></div>
            </div>
          </div>
        </div>
        <div className="cartItem-price">${product.productPrice}</div>
        <div
          className="cartItem-remove"
          onClick={() => handleRemoveCartItem(product.documentID)}
        >
          <RxCross1 size={"2rem"} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
