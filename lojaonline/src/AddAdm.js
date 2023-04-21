import { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function AddAdm({props}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const account = props.adms.find((user) => user.name === username);
        if (account) {
            alert("Account already exists!!!")
        }
        else{
            props.setAdms(prevAdms => [
                ...prevAdms,
                {
                    name: username,
                    email: email,
                    phone: phone,
                    password: password,
                }
            ]);
            navigate("/");
        }
            
    };

    return (
        <div id="loginInfo">
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                Name:<br /><input type="text" className="inputLogin" name="username" onChange={(e) => setUsername(e.target.value)} /><br /><br />
                Password:<br /><input type="password" className="inputLogin" name="Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
                Email:<br /><input type="email" className="inputLogin" name="Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
                Phone:<br /><input type="tel" className="inputLogin" name="Phone" onChange={(e) => setPhone(e.target.value)} /><br /><br />

                <input type="submit" id="confirmLogin" value="Submit"/>
            </form>    
        </div>
    );
}


export default memo(AddAdm);