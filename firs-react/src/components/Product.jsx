import React, { useContext, useState } from "react";
import { Tooltip } from "react-tooltip";
import "../styles/Product.scss";
import cartIcon from "@icons/bt_add_to_cart.svg";
import AppContext from "../context/AppContext";
import LazyLoad from "react-lazy-load";

const Product = ({ product }) => {
  // const [ toggle, setToggle ] = useState(false);
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
      <div className="Product">
        <img
          data-tooltip-id="tooltip"
          // data-tooltip-content="This are the product details \n"
          data-tooltip-place="top"
          src={product.image}
          alt=""
          // onClick={() => setToggle(true)}
        />
        <Tooltip id="tooltip">
          These are the product details <br />
          Bla bla bla bla bla bla
        </Tooltip>
        {/* {toggle && <ProductDetail/>} */}
        <div className="product-info">
          <div>
            <p>{product.title}</p>
            <p>${product.price}</p>
          </div>
          <figure onClick={() => handleClick(product)}>
            <img src={cartIcon} alt="" />
          </figure>
        </div>
      </div>
  );
};

export default Product;
