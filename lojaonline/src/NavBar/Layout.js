import { useState, memo } from "react";
import { Outlet, Link } from "react-router-dom";
import Search from "./Search.js";
import UserBtn from "./UserBtn.js";
import "./Layout.css";

function Layout({props}) {
    // function to toggle between light and dark theme
    const [theme, setTheme] = useState("dark-theme");
    function toggleTheme() {
        console.log(props);
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
                
                <Search props = {props}/>
                <button id="switchTheme" onClick={() => toggleTheme()}><i className="fa-solid fa-circle-half-stroke"></i></button>
                <UserBtn props = {props}/>
            </nav>
        
            <div id="content">
                <Outlet/>
            </div>
        </div></>
    );
}


export default memo(Layout);