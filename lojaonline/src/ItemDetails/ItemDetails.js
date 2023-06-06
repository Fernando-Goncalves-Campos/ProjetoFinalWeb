import { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ItemDetails.css";

function ItemDetails({ user, setUser, logged, adm, items }) {
	const { itemId } = useParams();
	const item = items.find((object) => object.id === itemId);

	//Usado para redirecionar o usuário para outra rota do site
	const navigate = useNavigate();

	//Determina para onde clicar no item exibido no menu irá levar o usuário
	//Para a página de login
	function login() {
		navigate("/login");
	}

    //Atualiza o carrinho no banco de dados
    const updateCartDB = async (newCart) => {
        await fetch(`http://localhost:5050/users/customer/${user.name}/cart`, {
            method: 'PATCH',
            body: JSON.stringify({
                cart: newCart
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }

	//Para a tela com o restante dos dados do item, enviando o ID do item no URL
	function buy() {
		//Modifica os valores que salvam as quantidades do item em estoque e vendidos
		let newCart = user.cart;
		let itemCartIndex = newCart.findIndex((itemCart) => itemCart[0] === itemId);

		//Caso já esteja no cart não faz nada
		if (itemCartIndex === -1) {
			newCart.push([itemId, 1]);

            //Adiciona o item ao carrinho
            updateCartDB(newCart);

            setUser({
                name: user.name,
                email: user.email,
                phone: user.phone,
                password: user.password,
                address: user.address,
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
		<button id="buyButton" className="buttonCont" onClick={login}>
			{item.price}
		</button>
	);

    //Caso o usuário não esteja logado
    if (!logged) {
        buyButton = (
            <button id="buyButton" className="buttonCont" onClick={login}>
                Login {item.price}
            </button>
        );

    //Caso o usuário não seja um adm
    } else if (!adm) {
        //Determina se é possível realizar a compra (se existem itens em estoque)
        if (item.quantity > 0) {
            buyButton = (
                <button id="buyButton" className="buttonCont" onClick={buy}>
                    Buy {item.price}
                </button>
            );
        } else {
            buyButton = (
                <button id="buyButton" className="buttonCont" disabled>
                    Sold Out
                </button>
            );
        }
    } else {
        buyButton = (
            <button id="buyButton" className="buttonCont" onClick={editItem}>
                Edit {item.price}
            </button>
        );
    }

    //Caso o usuário seja um adm
	return (
		<div>
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
