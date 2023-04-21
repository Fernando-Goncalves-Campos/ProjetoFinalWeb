import { useState, memo } from "react";
import LoginCustomer from "./LoginCustomer.js";
import LoginAdm from "./LoginAdm.js";
import LoginSignIn from "./LoginSignIn.js";
import './Login.css';

function Login({props}) {
    const [type, setType] = useState("customer");
    if(type === "customer"){
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

                <LoginCustomer props={props}/>
            </div>
        );
    }

    else if(type === "adm"){
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
    
                <LoginAdm props={props}/>
            </div>
        );
    }

    else{
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

                <LoginSignIn props={props}/>
            </div>
        );
    }
}


export default memo(Login);