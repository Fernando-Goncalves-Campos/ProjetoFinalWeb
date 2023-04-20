import { useState, memo } from "react";
import { Navigate } from "react-router-dom";
import './Login.css';

function LoginAdm({props}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const account = props.adms.find((user) => user.name === username);
        if (account && account.password === password) {
            props.setLogged(true);
            props.setAdm(true);
            props.setUser(account);
            return <Navigate replace to="/" />;
        }
        else{
            alert("account doesn't exist or the password is wrong!");
        }
    };

    return (
        <div id="loginInfo">
            <form onSubmit={handleSubmit}>
                Adm Name:<br /><input type="text" className="inputLogin" name="Username" onChange={(e) => setUsername(e.target.value)} /><br /><br />
                Password:<br /><input type="password" className="inputLogin" name="Password" onChange={(e) => setPassword(e.target.value)} /><br />
                <input type="submit" id="confirmLogin" value="Submit"/>
            </form>    
        </div>
    );

}


export default memo(LoginAdm);