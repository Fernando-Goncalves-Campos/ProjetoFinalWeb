import { memo } from "react";
import { useLocation, Link, Navigate } from "react-router-dom";
import "./LoginBtn.css";

function LoginBtn({props}) {
    let location = useLocation();
    function logout(){
        props.setLogged(false);
        props.setAdm(false);
        props.setUser(null);
        return <Navigate replace to="/" />;
    }

    if(location.pathname === "/login"){
        return (
            <></>
        );
    }

    else if(props.logged){
        return(
            <Link id="loginNav" to="/login" state={props}>Login</Link>
        );
    }

    else if(props.adm){
        return(
            <div id="userNav">
                <input type="checkbox" id="menu"></input>
                <label htmlFor="menu">{props.user.name}</label>
                <div className="menu-content">
                    <ul>
                        <li><Link to="/addItem">Add Item</Link></li>
                        <li><Link to="/addAdm">Add Adm</Link></li>
                        <li><button id="userNav" onClick={() => logout()}>Logout</button></li>
                    </ul>
                </div>
            </div>
        );
    }

    else{
        return(
            <div id="userNav">
                <input type="checkbox" id="menu"></input>
                <label htmlFor="menu">{props.user.name}</label>
                <div className="menu-content">
                    <ul>
                        <li><Link to="/compras">Compras</Link></li>
                        <li><button id="userNav" onClick={() => logout()}>Logout</button></li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default memo(LoginBtn);