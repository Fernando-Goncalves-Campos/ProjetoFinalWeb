import { useState, memo } from "react";
import LoginUser from "./LoginUser.js";
import LoginSignIn from "./LoginSignIn.js";
import './Login.css';

function Login({props}) {
    const [type, setType] = useState("login");
    let dataSubmit;

    //Modifica os dados conforme o tipo de login selecionado
    if(type === "login"){
        dataSubmit = <LoginUser props={props}/>;
    }
    else{
        dataSubmit = <LoginSignIn props={props}/>;
    }

    return (
        <div id="loginType">
            <br />
            <input type="radio" className="selectType" id="login" name="type" value="login" onChange={(e) => setType(e.target.value)} />
            <label htmlFor="login">Login  </label>
            <input type="radio" className="selectType" id="signIn" name="type" value="signIn" onChange={(e) => setType(e.target.value)} />
            <label htmlFor="signIn">Sign In  </label> <br />
            <br />
            <br />

            {dataSubmit}
        </div>
    );
}


export default memo(Login);