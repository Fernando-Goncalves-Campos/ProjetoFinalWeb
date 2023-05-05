import { useState, memo } from "react";
import LoginUser from "./LoginUser.js";
import LoginSignIn from "./LoginSignIn.js";
import './Login.css';

function Login({setUser, setLogged, setAdm, customers, setCustomers, adms}) {
    const [type, setType] = useState("login");
    let dataSubmit;

    //Modifica os dados conforme o tipo de login selecionado
    if(type === "login"){
        dataSubmit = <LoginUser setUser={(value)=>{setUser(value)}} setLogged={(value)=>{setLogged(value)}} setAdm={(value)=>{setAdm(value)}} customers={customers} adms={adms}/>;
    }
    else{
        dataSubmit = <LoginSignIn setUser={(value)=>{setUser(value)}} setLogged={(value)=>{setLogged(value)}} customers={customers} setCustomers={(value)=>{setCustomers(value)}} adms={adms}/>;
    }

    return (
        <div id="loginType">
            <br />
            <input type="radio" className="selectType" id="login" name="type" value="login" onChange={(e) => setType(e.target.value)} />
            <label htmlFor="login">Login  </label>
            <input type="radio" className="selectType" id="signIn" name="type" value="signIn" onChange={(e) => setType(e.target.value)} />
            <label htmlFor="signIn">Sign In  </label> <br /><br /><br />

            {dataSubmit}
        </div>
    );
}


export default memo(Login);