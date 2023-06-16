import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, productImage, price, productAuthor } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cart-item">
      <div className="img-box">
        <img src={productImage} alt={productName} />
      </div>
      <div className="description">
        <p className="title">
          <b>{productName}</b>
        </p>
        <p className="subtitle">
          <b>{productAuthor}</b>
        </p>
      </div>
      <div className="counter">
        <button className="cart-btn" onClick={() => removeFromCart(id)}>
          {" "}
          -{" "}
        </button>
        <input
          className="count"
          value={cartItems[id]}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button className="cart-btn" onClick={() => addToCart(id)}>
          +
        </button>
      </div>
      <div className="price">{price.toFixed(2)} €</div>
    </div>
  );
};
