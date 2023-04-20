import { useState, memo } from "react";
import { Navigate } from "react-router-dom";
import './Login.css';

function LoginSignIn({props}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const account = props.logins.find((user) => user.name === username);
        if (account) {
            alert("Account already exists!!!")
        }
        else{
            props.setLogged(true);
            props.setUser({
                name: {username},
                email: {email},
                phone: {phone},
                password: {password},
                address: {address}
            });
            
            props.setLogins(
                ...props.logins,
                props.user
            );
            
            return <Navigate replace to="/" />;
        }
            
    };

    return (
        <div id="loginInfo">
            <form onSubmit={handleSubmit}>
                Name:<br /><input type="text" className="inputLogin" name="Username" onChange={(e) => setUsername(e.target.value)} /><br /><br />
                Password:<br /><input type="password" className="inputLogin" name="Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
                Email:<br /><input type="email" className="inputLogin" name="Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
                Phone:<br /><input type="tel" className="inputLogin" name="Phone" onChange={(e) => setPhone(e.target.value)} /><br /><br />
                Address:<br /><input type="text" className="inputLogin" name="Address" onChange={(e) => setAddress(e.target.value)} /><br />

                <input type="submit" id="confirmLogin" value="Submit"/>
            </form>    
        </div>
    );
}


export default memo(LoginSignIn);