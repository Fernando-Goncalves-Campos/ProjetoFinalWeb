import React, { memo } from "react";
import ItemCart from "./ItemCart";
import "./Cart.css";

const Cart = ({ user, setUser, setCustomers, items, setItems }) => {
	let sum = 0;
	let newCart = user.cart;

	//caso o carrinho seja vazio toma um valor diferente
	let itemsOnCart =
		newCart.length === 0 ? (
			<span id="emptyText">Carrinho Vazio</span>
		) : (
			newCart.map((itemOnCart) => {
				let itemFound = items.find((itemOfStore) => {
					if (itemOfStore.id === itemOnCart[0]) {
						sum += itemOfStore.price * itemOnCart[1];
						return true;
					}
					return false;
				});

				return (
					<ItemCart
                        key={itemFound.id}
						user={user}
						setUser={setUser}
						setCustomers={setCustomers}
						newCart={newCart}
						qnt={itemOnCart[1]}
						item={itemFound}
					/>
				);
			})
		);

	let Total = itemsOnCart.length !== 0 ? <p>R$ {sum}</p> : <></>;

    //Esvazia o carrinho do cliente
	const handleEmptyCart = () => {
		setUser({
			name: user.name,
			password: user.password,
			phone: user.phone,
			email: user.email,
			address: user.address,
			cart: [],
		});

		setCustomers((prevCustomers) =>
			prevCustomers.map((cust) => {
				if (cust.name === user.name) {
					return {
						name: user.name,
						email: user.email,
						phone: user.phone,
						password: user.password,
						address: user.address,
						cart: [],
					};
				} else {
					return cust;
				}
			})
		);
	};

    //Atualiza a quantidade de itens no banco de dados
    const updateItemDB = async (id, newQuantity, newQuantitySold) => {
        await fetch(`http://localhost:5050/items/${id}/quantity`, {
            method: "PATCH",
            body: JSON.stringify({
                quantity: newQuantity,
                quantitySold: newQuantitySold
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }

	const handleBuy = () => {
		//Esvazia o carrinho ao finalzar a compra
		handleEmptyCart();

		//Altera a contagem de cada item comprado
		newCart.forEach((itemOnCart) => {
			setItems((prevItems) =>
				prevItems.map((itemOfStore) => {
                    //Caso o seja o item comprado, atualiza a quantidade
					if(itemOfStore.id === itemOnCart[0]){
                        //Calcula as novas quantidades
                        let newQuantity = itemOfStore.quantity - itemOnCart[1];
                        let newQuantitySold = itemOfStore.quantitySold + itemOnCart[1];
                        
                        //Atualiza o item no banco de dados
                        updateItemDB(itemOfStore.id, newQuantity, newQuantitySold);

                        //Atualiza o item no estado
						return  {
                            name: itemOfStore.name,
                            id: itemOfStore.id,
                            photo: itemOfStore.photo,
                            description: itemOfStore.description,
                            price: itemOfStore.price,
                            quantity: newQuantity,
                            quantitySold: newQuantitySold
                        }
                    }

                    //Caso não seja o item comprado, ele mantém o item como era antes
                    else{
                        return {...itemOfStore};
                    }
                })
			);
		});
	};

	//Botões para a compra
	//caso o carrinho seja vazio toma um valor diferente
	let buttonsCart =
		newCart.length === 0 ? (
			<></>
		) : (
			[
				<button id="btnClean" className="buttonCont buttonCart" onClick={handleEmptyCart}>
					limpar Carrinho
				</button>,
				<br />,
				<button id="btnBuy" className="buttonCont buttonCart" onClick={handleBuy}>
					comprar{Total}
				</button>,
			]
		);

	return (
		<div>
			<div id="cart">{itemsOnCart}</div>
			<div id="cartBtns">{buttonsCart}</div>
		</div>
	);
};

export default memo(Cart);
