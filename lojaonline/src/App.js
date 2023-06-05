import { useEffect, useState } from "react";
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
import EditAdm from "./Login/EditAdm.jsx";

function App() {
	//////Inicializa os estados que serão usados em todo o site
	//Lista dos itens da loja
	const [items, setItems] = useState([]);
    useEffect(() => {
        async function getItems() {
            const response = await fetch(`http://localhost:5050/items/`);
        
            if (!response.ok) {
              const message = `An error occurred: ${response.statusText}`;
              console.log(message);
              return;
            }
        
            const readItems = await response.json();
            await readItems.sort((a, b) => a.id - b.id)
            setItems(readItems);
        }
        
          getItems();
    }, []);

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
		{
			name: "admin1",
			password: "admin",
			phone: "999999999",
			email: "admin@admin.com",
		},
		{
			name: "admin2",
			password: "admin",
			phone: "999999999",
			email: "admin@admin.com",
		},
	]);

	//Usuário logado
	const [user, setUser] = useState({ name: "" });

	const [priceRange, setPriceRange] = useState([0, 1000]);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Layout
							user={user}
							setUser={(value) => {
								setUser(value);
							}}
							logged={logged}
							setLogged={(value) => {
								setLogged(value);
							}}
							adm={adm}
							setAdm={(value) => {
								setAdm(value);
							}}
							searchItem={searchItem}
							setSearchItem={(value) => {
								setSearchItem(value);
							}}
						/>
					}
				>
					<Route
						index
						element={
							<Store
								items={items}
								searchItem={searchItem}
								priceRange={priceRange}
								setPriceRange={(value) => {
									setPriceRange(value);
								}}
                                />
                            }
					/>

                    <Route
                        path="/addAdm"
                        element={
                            <AddAdm />
                        }
                    />
                    
					<Route
						path="/editAdm"
						element={
                            <EditAdm
								user={user}
							/>
						}
					/>
					<Route
						path="/itemDetails/:itemId"
						element={
							<ItemDetails
								user={user}
								setUser={(value) => {
									setUser(value);
								}}
								logged={logged}
								adm={adm}
								items={items}
								setCustomers={(value) => {
									setCustomers(value);
								}}
							/>
						}
					/>

					<Route
						path="/login"
						element={
							<Login
								setUser={(value) => {
									setUser(value);
								}}
								setLogged={(value) => {
									setLogged(value);
								}}
								setAdm={(value) => {
									setAdm(value);
								}}
							/>
						}
					/>
					<Route
						path="/addItem"
						element={
							<AddItem
								items={items}
								setItems={(value) => {
									setItems(value);
								}}
							/>
						}
					/>
					<Route
						path="/editItem/:itemId"
						element={
							<EditItem
								items={items}
								setItems={(value) => {
									setItems(value);
								}}
							/>
						}
					/>
					<Route
						path="/cart"
						element={
							<Cart
								user={user}
								setUser={(value) => {
									setUser(value);
								}}
								setCustomers={(value) => {
									setCustomers(value);
								}}
								items={items}
								setItems={(value) => {
									setItems(value);
								}}
							/>
						}
					/>

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
