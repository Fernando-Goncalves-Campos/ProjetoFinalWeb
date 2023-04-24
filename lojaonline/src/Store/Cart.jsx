import React, { useEffect, useState } from "react";
import ItemOption from "./ItemOption";
import { useNavigate } from "react-router-dom";

const Cart = ({ props }) => {
	const navigate = useNavigate();

	console.log(props.user.cart, "custormer");

	let itemsOnCart = props.user.cart.map((itemOnCart) => {
		let iten = props.items.find((t) => t.id == itemOnCart[0]);
		return <ItemOption props={props} item={iten} />;
	});

	console.log(itemsOnCart);

	const handleEmptyCart = () => {
		props.user.cart = [];
		navigate("/");
	};

	const handleBuy = () => {};
	console.log(itemsOnCart);

	if (itemsOnCart.length === 0) {
		itemsOnCart = <div>Carrinho Vazio</div>;
	}

	return (
		<div>
			<div id="store">{itemsOnCart}</div>
			<button onClick={handleEmptyCart}>limpar Carrinho</button>
			<br />
			<button onClick={handleBuy}>comprar</button>
		</div>
	);
};

export default Cart;
