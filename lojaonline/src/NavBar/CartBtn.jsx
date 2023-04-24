import React from "react";
import { Link, useLocation } from "react-router-dom";

const CartBtn = () => {
	let location = useLocation();

	if (location.pathname === "/login" || location.pathname === "/cart") {
		return <></>;
	} else {
		return (
			<Link id="switchTheme" to="cart">
				carro
			</Link>
		);
	}
};

export default CartBtn;
