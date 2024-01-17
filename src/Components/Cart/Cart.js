import React from "react";
import "./cart.css";

const Cart = ({ cart, dispatch }) => {
  const handleRemove = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: item.id } });
  };
  // Calculate the total price of all products in the cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No Product added to the cart</p>
      ) : (
        <div className="cartProducts">
          {cart.map((item) => (
            <div key={item.id} className="cartItem">
              <p className="itemTitle">{item.title}</p>
              <div className="cartItemDetails">
                <p className="priceAndQuantity">
                  ${item.price} x {item.quantity} = $
                  {(item.price * item.quantity).toFixed(2)}
                </p>
                <button className="removeBtn"
                onClick={() => {
                  handleRemove(item);
                }}
              >
                Remove
              </button>
              </div>
              
            </div>
          ))}
        </div>
      )}
      <p className="total">Total Price: ${getTotalPrice().toFixed(2)}</p>
    </div>
  );
};

export default Cart;
