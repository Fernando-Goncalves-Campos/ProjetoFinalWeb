import React from "react";
import ItemCart from "./ItemCart";

const Cart = ({ props }) => {
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

	const handleBuy = () => {
        props.user.cart = [];
    };

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
