import { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ItemDetails.css";

function ItemDetails({ props }) {
	const { itemId } = useParams();
	const item = props.items.find((object) => object.id === itemId);

	//Usado para redirecionar o usuário para outra rota do site
	const navigate = useNavigate();

	//Determina para onde clicar no item exibido no menu irá levar o usuário
	//Para a página de login
	function login() {
		navigate("/login");
	}

	//Para a tela com o restante dos dados do item, enviando o ID do item no URL
	function buy() {
		//Modifica os valores que salvam as quantidades do item em estoque e vendidos
		let newCart = props.user.cart;
		let itemCartIndex = newCart.findIndex((itemCart) => itemCart[0] === itemId);

		//Caso já esteja no cart não faz nada
		if (itemCartIndex === -1) {
			newCart.push([itemId, 1]);

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
                        cart: newCart,
                    };
                } else {
                    return cust;
                }
            }));

            props.setUser({
                name: props.user.name,
                email: props.user.email,
                phone: props.user.phone,
                password: props.user.password,
                address: props.user.address,
                cart: newCart,
            });
		}
		navigate("/cart");
	}

	//Para a tela de edição de itens com o ID do item
	function editItem() {
		navigate(`/editItem/${item.id}`);
	}

	//Seleciona a função de acordo com o tipo de login
	let buyButton = (
		<button id="buyButton" onClick={login}>
			{item.price}
		</button>
	);
	if (props !== undefined) {
		if (!props.logged) {
			buyButton = (
				<button id="buyButton" onClick={login}>
					Login {item.price}
				</button>
			);
		} else if (!props.adm) {
			//Determina se é possível realizar a compra (se existem itens em estoque)
			if (item.quantity > 0) {
				buyButton = (
					<button id="buyButton" onClick={buy}>
						Buy {item.price}
					</button>
				);
			} else {
				buyButton = (
					<button id="buyButton" disabled>
						Sold Out
					</button>
				);
			}
		} else {
			buyButton = (
				<button id="buyButton" onClick={editItem}>
					Edit {item.price}
				</button>
			);
		}
	}

	return (
		<div id="itemDetails">
			<img src={item.photo} alt={item.name} id="detailsImg" />
			<div id="detailsContainer">
				<span id="detailsName">{item.name}</span> <br />
				<span id="detailsId">{item.id}</span> <br />
				<br />
				<p id="detailsText">{item.description}</p> <br />
				<br />
				<span id="detailsQuantity">Quantity:{item.quantity}</span> <br />
				{buyButton}
			</div>
		</div>
	);
}

export default memo(ItemDetails);
