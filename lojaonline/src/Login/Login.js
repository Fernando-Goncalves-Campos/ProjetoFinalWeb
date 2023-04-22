import { useState, memo } from "react";
import LoginCustomer from "./LoginCustomer.js";
import LoginAdm from "./LoginAdm.js";
import LoginSignIn from "./LoginSignIn.js";
import './Login.css';

function Login({props}) {
    const [type, setType] = useState("customer");
    let dataSubmit;

    //Modifica os dados conforme o tipo de login selecionado
    if(type === "customer"){
        dataSubmit = <LoginCustomer props={props}/>;
    }
    else if(type === "adm"){
        dataSubmit = <LoginAdm props={props}/>;
    }
    else{
        dataSubmit = <LoginSignIn props={props}/>;
    }

    return (
        <div id="loginType">
            <br />
            <input type="radio" className="selectType" id="customer" name="type" value="customer" onChange={(e) => setType(e.target.value)} />
            <label htmlFor="customer">Customer  </label>
            <input type="radio" className="selectType" id="adm" name="type" value="adm" onChange={(e) => setType(e.target.value)} />
            <label htmlFor="adm">Adm  </label>
            <input type="radio" className="selectType" id="signIn" name="type" value="signIn" onChange={(e) => setType(e.target.value)} />
            <label htmlFor="signIn">Sign In  </label> <br />
            <br />
            <br />

            {dataSubmit}
        </div>
    );
}


export default memo(Login);