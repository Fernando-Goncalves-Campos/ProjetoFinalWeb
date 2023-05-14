import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./NavBar/Layout.js";
import Store from "./Store/Store.js";
import Login from "./Login/Login.js";
import ItemDetails from "./ItemDetails/ItemDetails.js";
import AddAdm from "./Login/AddAdm.js";
import AddItem from "./EditItem/AddItem.js";
import EditItem from "./EditItem/EditItem.js";
import Cart from "./Cart/Cart.jsx";

import "./App.css";
import "./Theme.css";

function App() {
	//////Inicializa os estados que serão usados em todo o site (alguns deles seriam substituídos pelo banco de dados)//////
	//Lista dos itens da loja
	const [items, setItems] = useState([
		{
			name: "Capivara",
			id: "0",
			photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
			description:
				"Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
			price: 420.69,
			quantity: 0,
			quantitySold: 0,
		},
		{
			name: "Capivara",
			id: "1",
			photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
			description:
				"Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
			price: 420.69,
			quantity: 1,
			quantitySold: 0,
		},
		{
			name: "Capivara",
			id: "2",
			photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
			description:
				"Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
			price: 420.69,
			quantity: 2,
			quantitySold: 0,
		},
		{
			name: "Capivara",
			id: "3",
			photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
			description:
				"Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
			price: 420.69,
			quantity: 3,
			quantitySold: 0,
		},
		{
			name: "Capivara",
			id: "4",
			photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
			description:
				"Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
			price: 420.69,
			quantity: 4,
			quantitySold: 0,
		},
		{
			name: "Capivara",
			id: "5",
			photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
			description:
				"Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
			price: 420.69,
			quantity: 5,
			quantitySold: 0,
		},
		{
			name: "Capivara",
			id: "6",
			photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
			description:
				"Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
			price: 420.69,
			quantity: 6,
			quantitySold: 0,
		},
		{
			name: "Capivara",
			id: "7",
			photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
			description:
				"Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
			price: 420.69,
			quantity: 7,
			quantitySold: 0,
		},
	]);

	//Valor que está na barra de pesquisa
	const [searchItem, setSearchItem] = useState("");

	//Estado do login
	const [logged, setLogged] = useState(false);

	//Tipo de usuário
	const [adm, setAdm] = useState(false);

	//Lista de contas de clientes
	const [customers, setCustomers] = useState([
		{
			name: "user",
			password: "user",
			phone: "000000000",
			email: "user@user.com",
			address: "userland",
			cart: [],
		},
	]);

	//Lista de contas de adms
	const [adms, setAdms] = useState([
		{
			name: "admin",
			password: "admin",
			phone: "999999999",
			email: "admin@admin.com",
		},
	]);

	//Usuário logado
	const [user, setUser] = useState({ name: "" });

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout user={user} setUser={(value)=>{setUser(value)}} logged={logged} setLogged={(value)=>{setLogged(value)}} adm={adm} setAdm={(value)=>{setAdm(value)}} setSearchItem={(value)=>{setSearchItem(value)}}/>}>
					<Route index element={<Store items={items} searchItem={searchItem}/>} />

					<Route path="/itemDetails/:itemId"element={<ItemDetails user={user} setUser={(value)=>{setUser(value)}} logged={logged} adm={adm} items={items} setCustomers={(value)=>{setCustomers(value)}}/>} />

					<Route path="/login" element={<Login setUser={(value)=>{setUser(value)}} setLogged={(value)=>{setLogged(value)}} setAdm={(value)=>{setAdm(value)}} customers={customers} setCustomers={(value)=>{setCustomers(value)}} adms={adms} />} />

					<Route path="/addAdm" element={<AddAdm customers={customers} adms={adms} setAdms={(value)=>{setAdms(value)}}/>} />
					<Route path="/addItem" element={<AddItem items={items} setItems={(value)=>{setItems(value)}} />} />
					<Route path="/editItem/:itemId" element={<EditItem items={items} setItems={(value)=>{setItems(value)}}/>} />
					<Route path="/cart" element={<Cart user={user} setUser={(value)=>{setUser(value)}} setCustomers={(value)=>{setCustomers(value)}} items={items} setItems={(value)=>{setItems(value)}}/>} />

					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

const NoPage = () => {
	return <h1 id="Erro">404</h1>;
};

export default App;
