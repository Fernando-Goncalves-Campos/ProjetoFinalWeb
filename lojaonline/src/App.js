import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import Store from "./Store.js";
import Login from "./Login.js";
import AddAdm from "./AddAdm.js";
import AddItem from "./AddItem.js";
import EditItem from "./EditItem.js";

import "./App.css";
import "./Theme.css";

function App() {
    const [items, setItems] = useState([{
        name: "Capivara",
        id: "0",
        photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
        description: "Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
        price: "R$420.69",
        quantity: 666,
        quantitySold: 0
    },
    {
        name: "Capivara",
        id: "1",
        photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
        description: "Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
        price: "R$420.69",
        quantity: 666,
        quantitySold: 0
    },
    {
        name: "Capivara",
        id: "2",
        photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
        description: "Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
        price: "R$420.69",
        quantity: 666,
        quantitySold: 0
    },
    {
        name: "Capivara",
        id: "3",
        photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
        description: "Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
        price: "R$420.69",
        quantity: 666,
        quantitySold: 0
    },
    {
        name: "Capivara",
        id: "4",
        photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
        description: "Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
        price: "R$420.69",
        quantity: 666,
        quantitySold: 0
    },
    {
        name: "Capivara",
        id: "5",
        photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
        description: "Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
        price: "R$420.69",
        quantity: 666,
        quantitySold: 0
    },
    {
        name: "Capivara",
        id: "6",
        photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
        description: "Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
        price: "R$420.69",
        quantity: 666,
        quantitySold: 0
    },
    {
        name: "Capivara",
        id: "7",
        photo: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
        description: "Como vc pode ver, essa é uma capivara com chapéu, óculos escuros e uma blusa, ela é avaliada pelos clientes como tendo o maior custo benefício do mercado.",
        price: "R$420.69",
        quantity: 666,
        quantitySold: 0
    }]);
    const [searchItem, setSearchItem] = useState("");

    const [logged, setLogged] = useState(false);

    const [adm, setAdm] = useState(false);
    
    const [customers, setCustomers] = useState([{
        name: "user",
        password: "user",
        phone: "000000000",
        email: "user@user.com",
        address: "userland"
    }]);

    const [adms, setAdms] = useState([{
        name: "admin",
        password: "admin",
        phone: "999999999",
        email: "admin@admin.com"
    }]);

    const [user, setUser] = useState({name:""});

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
                <Route path="/login" element={<Login  props = {props}/>} />
                <Route path="/addAdm" element={<AddAdm props = {props}/>} />
                <Route path="/:itemId/addItem" element={<AddItem props = {props}/>} />
                <Route path="/:itemId/editItem" element={<EditItem props = {props}/>} />
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
