import { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function LoginCreate({setUser, setLogged}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    //Usado para redirecionar o usuário para outra rota do site
    const navigate = useNavigate();
    
    //Adiciona a conta no banco de dados
    const addCustomerDB = async () => {
        const response = await fetch(`http://localhost:5050/users/`, {
            method: "POST",
            body: JSON.stringify({
                user: {
                    name: username,
                    password: password,
                    email: email,
                    phone: phone,
                    address: address,
                },
                adm: false
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

        //Adiciona o administrador ao banco de dados
        const response = await addCustomerDB()
        if(response.status === 201){
            const loggedUser = await response.json();
            setLogged(true);
            await setUser(loggedUser.user);
            navigate("/");
        }
        else{
            alert("Account already exists!!!");
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

                <input type="submit" className="buttonCont buttonForm" id="confirmLogin" value="Submit"/>
            </form>    
        </div>
    );
}


export default memo(LoginCreate);