import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import OrderItem from '../components/OrderItem';
import flecha from '@icons/flechita.svg'
import '../styles/MyOrder.scss';
import AppContext from '../context/AppContext'
import sumTotal from '../utils/sumTotal'

const MyOrders = ({ toggleOrders, setToggleOrders }) => {
	const {state:{cart}} = useContext(AppContext)
	
	return (
		<aside className="MyOrder">
			<div 
			onClick={()=>setToggleOrders(!toggleOrders)}
			className="title-container" >
				<img 
				src={flecha} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="section-scroll">
				{cart.map((product, ids)=>(
					<OrderItem product={product} key={`orderItem-${product.id}-${ids}`} ids={ids} />
				))}
				
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal(cart)}</p>
				</div>
				<link rel="stylesheet" href="" />
				<Link to='/checkout'>
					<button className="primary-button">
						Checkout
					</button>
				</Link>
			</div>
			{/* {toggle && <MyOrder setToggle={setToggle}/>} */}
		</aside>
	);
}

export default MyOrders;
