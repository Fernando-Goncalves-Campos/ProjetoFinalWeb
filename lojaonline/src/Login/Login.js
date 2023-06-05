import { useState, memo } from "react";
import LoginUser from "./LoginUser.js";
import LoginCreate from "./LoginCreate.js";
import './Login.css';

function Login({setUser, setLogged, setAdm}) {
    const [type, setType] = useState("login");
    let dataSubmit;

    //Modifica os dados conforme o tipo de login selecionado
    if(type === "login"){
        dataSubmit = <LoginUser setUser={(value)=>{setUser(value)}} setLogged={(value)=>{setLogged(value)}} setAdm={(value)=>{setAdm(value)}}/>;
    }
    else{
        dataSubmit = <LoginCreate setUser={(value)=>{setUser(value)}} setLogged={(value)=>{setLogged(value)}}/>;
    }

    return (
        <div id="loginType">
            <br />
            <input type="radio" className="selectType" id="login" name="type" value="login" onChange={(e) => setType(e.target.value)} />
            <label htmlFor="login">Login  </label>
            <input type="radio" className="selectType" id="create" name="type" value="create" onChange={(e) => setType(e.target.value)} />
            <label htmlFor="create">Create  </label> <br /><br /><br />

            {dataSubmit}
        </div>
    );
}


export default memo(Login);