import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemDetails from "./ItemDetails";

const ItemCart = ({ props, item, qnt, newCart }) => {
	//Usado para redirecionar o usuário para outra rota do site
	const navigate = useNavigate();

	let addBtn = <button onClick={() => handleQntBtnClick(true)}>+</button>;

	let subBtn = <button onClick={() => handleQntBtnClick(false)}>-</button>;

	function buy(sum) {
		let itemCartIndex = newCart.findIndex(
			(itemCart) => itemCart[0] === item.id
		);
		if (sum) {
			if (itemCartIndex !== -1) {
				newCart[itemCartIndex][1]++;
			} else {
				newCart.push([item.id, 1]);
			}
		} else {
			newCart[itemCartIndex][1]--;
			if (newCart[itemCartIndex][1] <= 0) {
				newCart = newCart.filter((iten) => {
					return iten[0] !== item.id;
				});
			}
		}

		//Adiciona a conta à lista de usuários
		props.setCustomers((prevCustomers) =>
			prevCustomers.map((cust) => {
				if (cust.name === props.user.name) {
					return {
						name: props.user.name,
						email: props.user.email,
						phone: props.user.phone,
						password: props.user.password,
						address: props.user.address,
						cart: { newCart },
					};
				} else {
					return cust;
				}
			})
		);

		props.setUser({
			name: props.user.name,
			email: props.user.email,
			phone: props.user.phone,
			password: props.user.password,
			address: props.user.address,
			cart: newCart,
		});
	}

	const handleQntBtnClick = (sum) => {
		if (sum) {
			if (qnt < item.quantity) {
				qnt++;
				{
					buy(true);
				}
			}
		} else {
			qnt--;
			buy(false);
		}
	};

	return (
		<div>
			<div className="storeItem">
				<img src={item.photo} alt={item.name} /> <br />
				<div class="storeItemText">
					<span className="itemName"> {item.name} </span> <br />
					<span className="itemId"> id: {item.id} </span> <br />
					<span>quantidade disponível: {item.quantity}</span>
					<br />
					<span className="itemPrice"> R$: {item.price} </span> <br />
				</div>
				{subBtn} {qnt} {addBtn}
			</div>
		</div>
	);
};

export default ItemCart;
