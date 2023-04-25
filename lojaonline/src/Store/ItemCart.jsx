import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemDetails from "./ItemDetails";

const ItemCart = ({ props, item, qnt }) => {
	//Usado para redirecionar o usuário para outra rota do site
	const navigate = useNavigate();

	const [addBtn, setAddBtn] = useState(() => {
		if (qnt == item.quantity) {
			return (
				<button onClick={() => handleQntBtnClick(true)} disabled>
					+
				</button>
			);
		} else {
			return <button onClick={() => handleQntBtnClick(true)}>+</button>;
		}
	});

	const [subBtn, setSubBtn] = useState(
		<button onClick={() => handleQntBtnClick(false)}>-</button>
	);

	function buy(sum) {
		//Modifica os valores que salvam as quantidades do item em estoque e vendidos
		let remov = false;
		let newCart = props.user.cart;

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
					console.log("comp", iten.id, item.id);
					return iten[0] !== item.id;
				});
			}
		}

		//Adiciona a conta à lista de usuários
		props.setCustomers((prevCustomers) => [
			...prevCustomers,
			{
				name: props.user.name,
				email: props.user.email,
				phone: props.user.phone,
				password: props.user.password,
				address: props.user.address,
				cart: newCart,
			},
		]);

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
				console.log(buy);
				qnt++;
				{
					buy(true);
				}
			}
		} else {
			qnt--;
			buy(false);
		}

		if (qnt === 0) {
			setSubBtn(
				<button onClick={() => handleQntBtnClick(false)} disabled>
					-
				</button>
			);
			setAddBtn(<button onClick={() => handleQntBtnClick(true)}>+</button>);
		} else if (qnt === item.quantity) {
			setAddBtn(
				<button onClick={() => handleQntBtnClick(true)} disabled>
					+
				</button>
			);
			setSubBtn(<button onClick={() => handleQntBtnClick(false)}>-</button>);
		} else {
			setSubBtn(<button onClick={() => handleQntBtnClick(false)}>-</button>);
			setAddBtn(<button onClick={() => handleQntBtnClick(true)}>+</button>);
		}
		console.log("qnt", qnt);
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
