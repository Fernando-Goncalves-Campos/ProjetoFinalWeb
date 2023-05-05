import { useState, memo } from "react";
import { Outlet, Link } from "react-router-dom";
import Search from "./Search.js";
import UserBtn from "./UserBtn.js";
import "./Layout.css";

function Layout({user, setUser, logged, setLogged, adm, setAdm, setSearchItem}) {
    // function to toggle between light and dark theme
    const [theme, setTheme] = useState("dark-theme");
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
                
                <Search setSearchItem = {(value)=>{setSearchItem(value)}}/>
                <button id="switchTheme" onClick={() => toggleTheme()}><i className="fa-solid fa-circle-half-stroke"></i></button>
                <UserBtn user={user} setUser={(value)=>{setUser(value)}} logged={logged} setLogged={(value)=>{setLogged(value)}} adm={adm} setAdm={(value)=>{setAdm(value)}}/>
            </nav>
        
            <div id="content">
                <Outlet/>
            </div>
        </div></>
    );
}


export default memo(Layout);