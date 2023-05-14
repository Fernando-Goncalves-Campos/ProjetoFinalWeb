import React, { memo } from "react";

const ItemCart = ({ user, setUser, setCustomers, item, qnt, newCart }) => {

    //Botões que modificam a quantidade de items selecionados
	let addBtn = <button className="buttonCont buttonQuant" onClick={() => handleQntBtnClick(true)}>+</button>;
	let subBtn = <button className="buttonCont buttonQuant" onClick={() => handleQntBtnClick(false)}>-</button>;

    //Função que realiza a adição/subtração de um item
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
				newCart = newCart.filter((itemNewCart) => {
					return itemNewCart[0] !== item.id;
				});
			}
		}

		//Modifica na lista de usuários
		setCustomers(prevCustomers =>
			prevCustomers.map((cust) => {
				if (cust.name === user.name) {
					return {
						name: user.name,
						email: user.email,
						phone: user.phone,
						password: user.password,
						address: user.address,
						cart: newCart,
					};
				} else {
					return cust;
				}
			})
		);

        //Modifica o usuário
		setUser({
			name: user.name,
			email: user.email,
			phone: user.phone,
			password: user.password,
			address: user.address,
			cart: newCart,
		});
	}

	const handleQntBtnClick = (sum) => {
		if (sum) {
			if (qnt < item.quantity) {
				qnt++;
                if(qnt === item.quantity){
                    addBtn = <button className="buttonCont buttonQuant" onClick={() => handleQntBtnClick(true)} disabled>+</button>;
                }
                buy(true);
			}
		} else {
			qnt--;
			buy(false);
		}
	};

	return (
		<div>
			<div className="cartItem">
				<img src={item.photo} alt={item.name} /> <br />
				<div className="cartItemText">
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

export default memo(ItemCart);
