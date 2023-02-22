import React, { useContext, useState } from "react";
import Menu from "./Menu";
import "../styles/Header.scss";
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import MyOrders from '../containers/MyOrders'
import AppContext from "../context/AppContext";

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = ()=> {
    setToggle(!toggle)
  }
  const [toggleOrders, setToggleOrders] = useState(false)
  const {state} = useContext(AppContext)

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li onClick={handleToggle} className="navbar-email">Luis</li>
          <li onClick={()=>setToggleOrders(!toggleOrders)} className="navbar-shopping-cart">
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div>: null}
          </li>
        </ul>
      </div>
      {toggle && <Menu/>}
      {toggleOrders && <MyOrders toggleOrders={toggleOrders} setToggleOrders={setToggleOrders}/>}
    </nav>
  );
};

export default Header;
