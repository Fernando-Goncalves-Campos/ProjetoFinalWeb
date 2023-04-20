import { useState, memo } from "react";
import { Outlet, Link } from "react-router-dom";
import Search from "./Search.js";
import LoginBtn from "./LoginBtn.js";
import './Layout.css';

function Layout() {
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
    }])
    
    const [user, setUser] = useState({name:""})
    const [theme, setTheme] = useState("dark-theme");

    const props = { 
        logged:{logged},
        setLogged:{setLogged},
        user:{user},
        setUser:{setUser},
        logins:{logins},
        setLogins:{setLogins},
        adms:{adms},
        setAdms:{setAdms},
        adm:{adm},
        setAdm:{setAdm},
        items:{items},
        setItems:{setItems},
        searchItem:{searchItem},
        setSearchItem:{setSearchItem}
    }

    // function to toggle between light and dark theme
    function toggleTheme() {
        if (theme === 'dark-theme') {
            setTheme('light-theme');
        } 
        else {
            setTheme('dark-theme');
        }
    }

    return (
        <><div className={theme}>
            <nav id="navBar">
                <Link to="/" id="logo">Logo</Link>
                
                <Search />
                <button id="switchTheme" onClick={() => toggleTheme()}><i className="fa-solid fa-circle-half-stroke"></i></button>
                <LoginBtn props = {props}/>
            </nav>
        
            <div id="content">
            
                <Outlet />
            </div>
        </div></>
    );
}


export default memo(Layout);