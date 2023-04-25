import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./NavBar/Layout.js";
import Store from "./Store/Store.js";
import Login from "./Login/Login.js";
import ItemDetails from "./Store/ItemDetails.js";
import AddAdm from "./Login/AddAdm.js";
import AddItem from "./EditItem/AddItem.js";
import EditItem from "./EditItem/EditItem.js";

import "./App.css";
import "./Theme.css";

function App() {
    //////Inicializa os estados que serão usados em todo o site (alguns deles seriam substituídos pelo banco de dados)//////
    //Lista dos itens da loja
    const [items, setItems] = useState([{
        name: "Capivara",
        id: "0",
        photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
        description: "Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
        price: "R$420.69",
        quantity: 0,
        quantitySold: 0
    },
    {
        name: "Capivara",
        id: "1",
        photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
        description: "Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
        price: "R$420.69",
        quantity: 1,
        quantitySold: 0
    },
    {
        name: "Capivara",
        id: "2",
        photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
        description: "Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
        price: "R$420.69",
        quantity: 2,
        quantitySold: 0
    },
    {
        name: "Capivara",
        id: "3",
        photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
        description: "Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
        price: "R$420.69",
        quantity: 3,
        quantitySold: 0
    },
    {
        name: "Capivara",
        id: "4",
        photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
        description: "Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
        price: "R$420.69",
        quantity: 4,
        quantitySold: 0
    },
    {
        name: "Capivara",
        id: "5",
        photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
        description: "Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
        price: "R$420.69",
        quantity: 5,
        quantitySold: 0
    },
    {
        name: "Capivara",
        id: "6",
        photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
        description: "Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
        price: "R$420.69",
        quantity: 6,
        quantitySold: 0
    },
    {
        name: "Capivara",
        id: "7",
        photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
        description: "Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
        price: "R$420.69",
        quantity: 7,
        quantitySold: 0
    },
    {
        name: "Capivara",
        id: "8",
        photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
        description: "Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
        price: "R$420.69",
        quantity: 7,
        quantitySold: 0
    },
    {
        name: "Capivara",
        id: "9",
        photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
        description: "Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
        price: "R$420.69",
        quantity: 7,
        quantitySold: 0
    }]);

    //Valor que está na barra de pesquisa
    const [searchItem, setSearchItem] = useState("");

    //Estado do login
    const [logged, setLogged] = useState(false);

    //Tipo de usuário
    const [adm, setAdm] = useState(false);
    
    //Lista de contas de clientes
    const [customers, setCustomers] = useState([{
        name: "user",
        password: "user",
        phone: "000000000",
        email: "user@user.com",
        address: "userland",
        cart: []
    }]);

    //Lista de contas de adms
    const [adms, setAdms] = useState([{
        name: "admin",
        password: "admin",
        phone: "999999999",
        email: "admin@admin.com"
    }]);

    //Usuário logado
    const [user, setUser] = useState({name:""});


    //////Guarda todos os valores dos estados, para ficar mais fácil de passar os valores//////
    /*Não é recomendado se fazer isso em projetos grandes por questões de performance e de facilidade de manutenção,
    mas como esse projeto é pequeno, fazer isso não seria tão ruim*/
    /*Para imprimir os estados no console ppode-se alterar o tema do site
    (é mais fácil de debugar o código se tiver um método para imprimir os estados)*/
    const props = { 
        logged: logged,
        setLogged: value => {setLogged(value)},
        user: user,
        setUser: value => {setUser(value)},
        customers: customers,
        setCustomers: value => {setCustomers(value)},
        adms: adms,
        setAdms: value => {setAdms(value)},
        adm: adm,
        setAdm: value => {setAdm(value)},
        items: items,
        setItems: value => {setItems(value)},
        searchItem: searchItem,
        setSearchItem: value => {setSearchItem(value)}
    }

    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout  props = {props} />}>
                <Route index element={<Store props = {props} />} />

                <Route path="/itemDetails/:itemId" element={<ItemDetails props = {props}/>} />

                <Route path="/login" element={<Login  props = {props}/>} />
                
                <Route path="/addAdm" element={<AddAdm props = {props}/>} />
                <Route path="/addItem" element={<AddItem props = {props}/>} />
                <Route path="/editItem/:itemId" element={<EditItem props = {props}/>} />
                
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
};

const NoPage = () => {
    return <h1 id="Erro">404</h1>;
};

export default App;
