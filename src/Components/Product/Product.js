import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  //console.log(props);
  const { image, name, instructor, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={image} alt="" />
      </div>

      <div>
        <h4 className="product-name">{name}</h4>
        <br />
        <p>
          {" "}
          <small>by:{instructor}</small>
        </p>
        <p>${price}</p>
        <br />
        <p>
          <small>Only {stock} left in stock - Order soon</small>
        </p>
        <button
          className="main-button"
          onClick={() => props.handdleAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
