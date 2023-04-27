import React, { useEffect, useState } from "react";
import ItemOption from "./ItemOption";
import { useNavigate } from "react-router-dom";
import ItemCart from "./ItemCart";

const Cart = ({ props }) => {
	const navigate = useNavigate();

	let sum = 0;

	let Total;
	let newCart = props.user.cart;

	let itemsOnCart = newCart.map((itemOnCart) => {
		let iten = props.items.find((t) => {
			if (t.id === itemOnCart[0]) {
				sum += t.price * itemOnCart[1];
				return true;
			}
			return false;
		});

		return (
			<ItemCart
				props={props}
				newCart={newCart}
				qnt={itemOnCart[1]}
				item={iten}
			/>
		);
	});

	const handleEmptyCart = () => {
		props.user.cart = [];
	};

	const handleBuy = () => {};

	// props.setUser({
	// 	name: props.user.name,
	// 	email: props.user.email,
	// 	phone: props.user.phone,
	// 	password: props.user.password,
	// 	address: props.user.address,
	// 	cart: newCart,
	// });

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
