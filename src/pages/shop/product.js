import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b className="productName"> {productName} </b>
        </p>
        <p> {price.toFixed(2)} € </p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Ajouter au Panier
      </button>
    </div>
  );
};
