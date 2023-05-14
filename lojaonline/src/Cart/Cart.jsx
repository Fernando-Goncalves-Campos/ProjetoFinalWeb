import React, { memo } from "react";
import ItemCart from "./ItemCart";
import "./Cart.css";

const Cart = ({ user, setUser, setCustomers, items, setItems }) => {
	let sum = 0;

	let Total;
	let newCart = user.cart;

	let itemsOnCart = newCart.map((itemOnCart) => {
		let itemFound = items.find(itemOfStore => {
			if (itemOfStore.id === itemOnCart[0]) {
				sum += itemOfStore.price * itemOnCart[1];
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
				item={itemFound}
			/>
		);
	});

	const handleEmptyCart = () => {
		setUser({
            name: user.name,
			password: user.password,
			phone: user.phone,
			email: user.email,
			address: user.address,
			cart: [],
        })

        setCustomers(prevCustomers =>
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

	const handleBuy = () => {
        //Esvazia o carrinho ao finalzar a compra
        handleEmptyCart();

        //Altera a contagem de cada item comprado
        newCart.forEach(itemOnCart =>{
            setItems(prevItems => 
                prevItems.map(itemOfStore =>
                itemOfStore.id === itemOnCart[0] ?
                {   
                    name: itemOfStore.name,
                    id: itemOfStore.id,
                    photo: itemOfStore.photo,
                    description: itemOfStore.description,
                    price: itemOfStore.price,
                    quantity: itemOfStore.quantity - itemOnCart[1],
                    quantitySold: itemOfStore.quantitySold + itemOnCart[1]
                }
                : {...itemOfStore}
            ));                
        });
    };
    
    //Botões para a compra
    let buttonsCart = [
        <button  className="buttonCont buttonCart" onClick={handleEmptyCart}>limpar Carrinho</button>,
        <br />,
        <button  className="buttonCont buttonCart" onClick={handleBuy}>comprar{Total}</button>
    ]

    //Distingui entre o carrinho vazio e ele cheio
	if (itemsOnCart.length === 0) {
		itemsOnCart = <span id="emptyText">Carrinho Vazio</span>;
		Total = <></>;
        buttonsCart = <></>
	} else {
		Total = <p>R$ {sum}</p>;
	}

	return (
		<div>
			<div id="cart">{itemsOnCart}</div>
            <div id="cartBtns">
                {buttonsCart}
            </div>
			
		</div>
	);
};

export default memo(Cart);
