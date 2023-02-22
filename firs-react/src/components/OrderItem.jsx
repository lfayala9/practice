import React, {useContext} from "react";
import "../styles/OrderItem.scss"
import close from '@icons/icon_close.png'
import AppContext from "../context/AppContext";

const OrderItem = ({product, ids}) => {

  const {removeFromCart} = useContext(AppContext)
  const handleRemove = product =>{
    removeFromCart(product)
  }

  return (
    <div className="OrderItem">
      <figure>
        <img
          src={product.image}
          alt="bike"
        />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img className="close" src={close}alt="close" onClick={()=>handleRemove(ids)}/>
    </div>
  );
};

export default OrderItem;