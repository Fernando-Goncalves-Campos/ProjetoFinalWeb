import React, { useEffect, useState } from "react";
import ItemOption from "./ItemOption";
import { useNavigate } from "react-router-dom";
import ItemCart from "./ItemCart";

const Cart = ({ props }) => {
	const navigate = useNavigate();

	console.log(props.user.cart, "custormer");
	let sum = 0;

	let itemsOnCart = props.user.cart.map((itemOnCart) => {
		let iten = props.items.find((t) => {
			if (t.id == itemOnCart[0]) {
				sum += t.price * itemOnCart[1];
				return true;
			}
			return false;
		});
		return <ItemCart props={props} qnt={itemOnCart[1]} item={iten} />;
	});

	let Total;

	console.log(itemsOnCart);

	const handleExclude = (index) => {};

	const handleEmptyCart = () => {
		props.user.cart = [];
		navigate("/");
	};

	const handleBuy = () => {};
	console.log(itemsOnCart);

	if (itemsOnCart.length === 0) {
		itemsOnCart = <div>Carrinho Vazio</div>;
		Total = <></>;
	} else {
		Total = <p>R$ {sum}</p>;
	}

	return (
		<div>
			<div id="store">{itemsOnCart}</div>
			<button onClick={handleEmptyCart}>limpar Carrinho</button>
			<br />
			<button onClick={handleBuy}>comprar{Total}</button>
		</div>
	);
};

export default Cart;
