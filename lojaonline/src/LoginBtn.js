import { memo } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "./LoginBtn.css";

function LoginBtn({props}) {
    let location = useLocation();
    
    const navigate = useNavigate();

    async function logout(){
        await props.setLogged(false);
        await props.setAdm(false);
        await props.setUser({name: ""});
        navigate("/");
    }

    if(location.pathname === "/login"){
        return (
            <></>
        );
    }

    else if(!props.logged){
        return(
            <Link id="loginNav" to="/login">Login</Link>
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