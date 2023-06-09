import { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import "./AddItem.css";

function AddItem({ items, setItems }) {
	//Salva os valores inseridos nos inputs constantemente
	const [name, setName] = useState("");
	const [id, setId] = useState("");
	const [photo, setPhoto] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);

	//Usado para redirecionar o usuário para outra rota do site
	const navigate = useNavigate();

	//Adiciona o item no banco de dados
	const addItemDB = async () => {
		await fetch(`http://localhost:5050/items/`, {
			method: "POST",
			body: JSON.stringify({
				name: name,
				id: id,
				photo: photo,
				description: description,
				price: price,
				quantity: quantity,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
	};

	//Realiza a validação dos dados
	const handleSubmit = async (e) => {
		e.preventDefault();

		const oldItem = items.find((item) => item.id === id);
		//Garante que não existem itens com o mesmo id
		if (oldItem) {
			alert("Another item have the same id!!!!");
		} else if (quantity < 0) {
			alert("Quantidade inválida");
		} else if (price <= 0) {
			alert("Preço inválido");
		} else {
			//Adiciona o item no banco de dados
			addItemDB();

			//Adiciona o item à lista
			setItems((prevItems) => [
				...prevItems,
				{
					name: name,
					id: id,
					photo: photo,
					description: description,
					price: price,
					quantity: quantity,
					quantitySold: 0,
				},
			]);

			//Retorna para a página inicial
			navigate("/");
		}
	};

	return (
		<div id="itemInfo">
			<br />
			<br />
			<form onSubmit={handleSubmit}>
				Name:
				<br />
				<input
					type="text"
					className="inputItem"
					name="name"
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<br />
				<br />
				Id:
				<br />
				<input
					type="text"
					className="inputItem"
					name="id"
					onChange={(e) => setId(e.target.value)}
					required
				/>
				<br />
				<br />
				Photo (the path to the img):
				<br />
				<input
					type="text"
					className="inputItem"
					name="photo"
					onChange={(e) => setPhoto(e.target.value)}
					required
				/>
				<br />
				<br />
				Description:
				<br />
				<textarea
					rows="5"
					cols="30"
					className="inputItem"
					name="description"
					onChange={(e) => setDescription(e.target.value)}
					required
				/>
				<br />
				<br />
				Price:
				<br />
				<input
					type="text"
					className="inputItem"
					name="price"
					onChange={(e) => setPrice(Number(e.target.value))}
					required
				/>
				<br />
				<br />
				Quantity:
				<br />
				<input
					type="number"
					className="inputItem"
					name="quantity"
					onChange={(e) => setQuantity(Number(e.target.value))}
					required
				/>
				<br />
				<br />
				<input
					type="submit"
					className="buttonCont buttonForm"
					id="confirmItem"
					value="Submit"
					required
				/>
			</form>
		</div>
	);
}

export default memo(AddItem);
