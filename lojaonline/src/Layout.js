import { useState, memo } from "react";
import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import './Theme.css';

function Layout() {
    const [theme, setTheme] = useState("dark-theme")

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
                <button id="logo">Logo</button>
                
                <div id="search">
                    <input type="text" id="searchText"></input>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <button id="switchTheme" onClick={() => toggleTheme()}><i className="fa-solid fa-circle-half-stroke"></i></button>
                <button id="userNav">Login</button>
            </nav>
        
            <div id="content">
                <div style={{backgroundImage: "linear-gradient(180deg, rgba(0,76,167,1) 0%, rgba(0,0,1,1) 100%)", height: "5000px"}}></div>
            
                <Outlet />
            </div>
        </div></>
  );
}


export default memo(Layout);
