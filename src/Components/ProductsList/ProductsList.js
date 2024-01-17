import React from "react";
import "./productlist.css";

const ProductsList = ({ products, cart, dispatch }) => {
  const getProductQuantity = (productId) => {
    const cartItem = cart.find((item) => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="productsList">
      <h2>Products</h2>
      <div className="productsContainer">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="imageContainer">
              <img src={product.image} alt="" />
            </div>
            <div className="productDetails">
              <p className="title">{product.title}</p>
              <div className="restDetails">
                <p className="price">${product.price}</p>
                <div className="buttons">
                  <button
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: product })
                    }
                  >
                    +
                  </button>
                  <span>{getProductQuantity(product.id)}</span>
                  <button
                    onClick={() =>
                      dispatch({ type: "DECREMENT_QUANTITY", payload: product })
                    }
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
