import React, { Fragment, useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="header">
        <h3 className="heading">Votre panier</h3>
        <h5 className="action">Supprimer tout</h5>
      </div>

      {PRODUCTS.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <CartItem data={product} />;
        }
      })}

      {totalAmount > 0 ? (
        <Fragment>
          <hr />
          <div className="checkout">
            <div className="total">
              <div className="subtotal"> Total: </div>
            </div>
            <div className="total-amount"> {totalAmount.toFixed(2)} €</div>
          </div>
          <button className="button" onClick={() => navigate("/")}>
            {" "}
            Continuer shopping{" "}
          </button>
          <button
            className="button"
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}>
            {" "}
            Checkout{" "}
          </button>
        </Fragment>
      ) : (
        <h1> Votre panier est vide</h1>
      )}
    </div>
  );
};
