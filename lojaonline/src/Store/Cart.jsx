import React, { useEffect, useState } from "react";
import ItemOption from "./ItemOption";
import { useNavigate } from "react-router-dom";

const Cart = ({ props }) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (!props.logged) {
			navigate("/login");
		} else {
			//configurar o user atual talvez
		}
	}, []);

	const [itemsOnCart, setItemsOnCart] = useState(
		props.items.filter((item) => item.quantityOnCart !== 0)
	);
	//criar ItemCart
	let ItemsCart = itemsOnCart.map((item) => <ItemOption item={item} />);

	if (itemsOnCart.length === 0) {
		return <div>Carrinho Vazio</div>;
	}

	const handleEmptyCart = () => {
		props.setItems(
			props.items.map((prevItems) =>
				prevItems.quantityOnCart !== 0
					? {
							name: prevItems.name,
							id: prevItems.id,
							photo: prevItems.photo,
							description: prevItems.description,
							price: prevItems.price,
							quantity: prevItems.quantity + prevItems.quantityOnCart,
							quantitySold: prevItems.quantitySold,
							quantityOnCart: 0,
					  }
					: { ...prevItems }
			)
		);
		navigate("/");
	};

	//pedir númeor de cartão de crédito
	const handleBuy = () => {
		props.setItems(
			props.items.map((prevItems) =>
				prevItems.quantityOnCart !== 0
					? {
							name: prevItems.name,
							id: prevItems.id,
							photo: prevItems.photo,
							description: prevItems.description,
							price: prevItems.price,
							quantity: prevItems.quantity,
							quantitySold: prevItems.quantitySold + prevItems.quantityOnCart,
							quantityOnCart: 0,
					  }
					: { ...prevItems }
			)
		);
		navigate("/");
	};
	return (
		<div>
			<div id="store">{ItemsCart}</div>
			<button onClick={handleEmptyCart}>limpar Carrinho</button>
			<br />
			<button onClick={handleBuy}>comprar</button>
		</div>
	);
};

export default Cart;
