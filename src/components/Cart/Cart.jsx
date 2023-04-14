import React from "react";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import "./styles.scss";
import { createStructuredSelector } from "reselect";
import CartItem from "./CartItem/CartItem";
const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
const Cart = (props) => {
  const { cartItems, total } = useSelector(mapState);

  return (
    <div className="basket">
      <div className="cartTotal">
        <h1>Your Cart</h1>
        <h1>Total: ${total}</h1>
      </div>
      <div className="cartItems">
        {cartItems.map((item, key) => (
          <CartItem key={key} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
