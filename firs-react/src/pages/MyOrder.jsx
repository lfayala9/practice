import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import "../styles/MyOrders.scss";
import AppContext from "../context/AppContext";
import sumTotal from "../utils/sumTotal";
import flecha from "@icons/flechita.svg";

const MyOrder = () => {
  const {
    state: { cart },
  } = useContext(AppContext);
  const date = new Date();
  return (
    <div className="Checkout">
      <div className="Checkout-container">
		<div className="title-container">
        	<img src={flecha} alt="arrow" />
        	<h1 className="Checkout-title">My order</h1>
		</div>
        <div className="Checkout-content">
          {cart.map((product, index) => (
            <OrderItem indexValue={index} product={product} key={index} />
          ))}
          <div className="order">
            <p className="order__info">
              <span className="order__date">
                {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
              </span>
              <span className="order__quantity">{cart.length} articles</span>
            </p>
            {/* <p className='order__total'>$ {sumTotal(cart)}</p> */}
            <p>{sumTotal(cart)}</p>
          </div>
			<button className="primary-button">PAY</button>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
