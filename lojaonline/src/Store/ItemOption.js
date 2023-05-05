import { memo } from "react";
import { useNavigate } from "react-router-dom";
import "./Store.css";

function ItemOption({ item }) {
	//Usado para redirecionar o usuário para outra rota do site
	const navigate = useNavigate();

	//Para a tela com o restante dos dados do item, enviando o ID do item no URL
	function handleClick() {
		navigate(`/itemDetails/${item.id}`);
	}

	return (
		<div className="storeItem" onClick={handleClick}>
			<img src={item.photo} alt={item.name} /> <br />
			<div className="storeItemText">
				<span className="itemName"> {item.name} </span> <br />
				<span className="itemId"> {item.id} </span> <br />
				<span className="itemPrice"> {item.price} </span> <br />
			</div>
		</div>
	);
}

export default memo(ItemOption);
