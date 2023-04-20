import { useState, memo } from "react";
import LoginUser from "./LoginUser.js";
import LoginAdm from "./LoginAdm.js";
import LoginSignIn from "./LoginSignIn.js";
import './Login.css';
import { useLocation } from "react-router-dom";

function Login() {
    const props = useLocation().state
    const [type, setType] = useState("user");

    if(type === "user"){
        return (
            <div id="loginType">
                <br />
                <input type="radio" className="selectType" id="user" name="type" value="user" onChange={(e) => setType(e.target.value)} />
                <label htmlFor="user">User  </label>
                <input type="radio" className="selectType" id="adm" name="type" value="adm" onChange={(e) => setType(e.target.value)} />
                <label htmlFor="adm">Adm  </label>
                <input type="radio" className="selectType" id="signIn" name="type" value="signIn" onChange={(e) => setType(e.target.value)} />
                <label htmlFor="signIn">Sign In  </label> <br />
                <br />
                <br />

                <LoginUser props={props}/>
            </div>
        );
    }

    else if(type === "adm"){
        return (
            <div id="loginType">
                <br />
                <input type="radio" className="selectType" id="user" name="type" value="user" onChange={(e) => setType(e.target.value)} />
                <label htmlFor="user">User  </label>
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
                <input type="radio" className="selectType" id="user" name="type" value="user" onChange={(e) => setType(e.target.value)} />
                <label htmlFor="user">User  </label>
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