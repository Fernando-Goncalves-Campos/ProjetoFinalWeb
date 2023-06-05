import { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function AddAdm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    //Usado para redirecionar o usuário para outra rota do site
    const navigate = useNavigate();
    
    //Adiciona a conta no banco de dados
    const addAdmDB = async () => {
        const response = await fetch(`http://localhost:5050/users/`, {
            method: "POST",
            body: JSON.stringify({
                user: {
                    name: username,
                    password: password,
                    email: email,
                    phone: phone
                },
                adm: true
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        
        return response;
    }

    //Realiza a validação dos dados
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await addAdmDB()
        if (response.status === 201) {
            navigate("/editAdm");
        }
        else{
            alert("Account already exists!!!");
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

                <input type="submit" className="buttonCont buttonForm" id="confirmLogin" value="Submit"/>
            </form>    
        </div>
    );
}


export default memo(AddAdm);