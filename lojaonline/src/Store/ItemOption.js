import { memo } from "react";
import { useNavigate } from "react-router-dom";
import "./ItemOption.css";

function ItemOption({ item }) {
	//Usado para redirecionar o usuário para outra rota do site
	const navigate = useNavigate();

	//Para a tela com o restante dos dados do item, enviando o ID do item no URL
	function handleClick() {
		navigate(`/items/${item.id}/itemDetails`);
	}

	return (
		<div className="storeItem" onClick={handleClick}>
			<img src={item.photo} alt={item.name} /> <br />
			<div className="storeItemText">
				<span className="itemPrice">
					{" "}
					R${item.price} <span className="itemQnt"> qnt {item.quantity} </span>
				</span>{" "}
				<br />
				<span className="itemName"> {item.name} </span>
				<br />
				<span className="itemDescription"> {item.description} </span>
				<br />
			</div>
		</div>
	);
}

export default memo(ItemOption);
