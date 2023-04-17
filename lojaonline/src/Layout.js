import { useState, memo } from "react";
import { Outlet, Link } from "react-router-dom";
import './App.css';

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
        <><div id="container" className={theme}>
            <nav id="navBar">
                <button id="logo">Logo</button>
                <button id="userNav">Login</button>
                <button id="switchTheme" onClick={() => toggleTheme()}><i className="fa-solid fa-circle-half-stroke"></i></button>

            </nav>
        </div>

        <Outlet /></>
  );
}


export default memo(Layout);
