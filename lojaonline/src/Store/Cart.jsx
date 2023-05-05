import React from "react";
import ItemCart from "./ItemCart";

const Cart = ({ user, setUser, setCustomers, items, setItems }) => {
	let sum = 0;

	let Total;
	let newCart = user.cart;

	let itemsOnCart = newCart.map((itemOnCart) => {
		let iten = items.find((t) => {
			if (t.id === itemOnCart[0]) {
				sum += t.price * itemOnCart[1];
				return true;
			}
			return false;
		});

		return (
			<ItemCart
                user={user}
                setUser={setUser}
                setCustomers={setCustomers}
				newCart={newCart}
				qnt={itemOnCart[1]}
				item={iten}
			/>
		);
	});

	const handleEmptyCart = () => {
		user.cart = [];
	};

	const handleBuy = () => {
        user.cart = [];
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
