import "./App.css";
import ProductsList from "./Components/ProductsList/ProductsList";
import Cart from "./Components/Cart/Cart";
import productData from "./Components/ProductsList/productData.json";
import React, { useReducer } from 'react';

function App() {
  // Reducer function to manage the cart state
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        // Check if the product is already in the cart
      const existingProduct = state.find(item => item.id === action.payload.id);

      if (existingProduct) {
        // If it exists, increment the quantity
        return state.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If it doesn't exist, add it to the cart with quantity 1
        return [...state, { ...action.payload, quantity: 1 }];
      }
      case "REMOVE_FROM_CART":
        return state.filter(item => item.id !== action.payload.id);
      case "INCREMENT_QUANTITY":
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      case "DECREMENT_QUANTITY":
        return state.map(item => {
          if (item.id === action.payload.id) {
            const updatedQuantity = item.quantity - 1;
            return updatedQuantity > 0 ? { ...item, quantity: updatedQuantity } : null;
          } else {
            return item;
          }
        }).filter(Boolean);
      default:
        return state;
    }
  };

  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <div className="App">
      <ProductsList products={productData} dispatch={dispatch} cart={cart} />
      <Cart cart={cart} dispatch={dispatch} />
    </div>
  );
}

export default App;
