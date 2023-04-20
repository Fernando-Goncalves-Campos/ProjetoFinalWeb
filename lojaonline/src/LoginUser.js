import { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function LoginUser({props}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const account = props.logins.find((user) => user.name === username);
        if (account && account.password === password) {
            props.setLogged(true);
            props.setUser(account);
            navigate("/");
        }
        else{
            alert("account doesn't exist or the password is wrong!");
        }
    };

    return (
        <div id="loginInfo">
            <form onSubmit={handleSubmit}>
                Name:<br /><input type="text" className="inputLogin" name="Username" onChange={(e) => setUsername(e.target.value)} /><br /><br />
                Password:<br /><input type="password" className="inputLogin" name="Password" onChange={(e) => setPassword(e.target.value)} /><br />
                <input type="submit" id="confirmLogin" value="Submit"/>
            </form>    
        </div>
    );

}


export default memo(LoginUser);