import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import Layout from "./Layout.js";
import "./App.css";
import "./Theme.css";

function App() {
    const [items, setItems] = useState([{}]);
    const [searchItem, setSearchItem] = useState("");

    const [logged, setLogged] = useState(false);

    const [adm, setAdm] = useState(false);
    
    const [logins, setLogins] = useState([{
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
        logins: logins,
        setLogins: value => {setLogins(value)},
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
            <Route path="/" element={<Layout  props = {props}/>}>
                <Route path="/login" element={<Login  props = {props}/>} />
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
