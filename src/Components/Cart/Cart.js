import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;

  let total = 0;
  let summary = "";
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
    summary = summary + product.name;
    summary = summary + ",";
  }
  const totalPrice = total;
  return (
    <div>
      <div className="cart-body">
        <h4>Order Summary</h4>
        <p>Items Ordered : {cart.length}</p>
        <p>
          Order Summary : <b> {summary}</b>
        </p>
        <p className="total">Total Price : ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
