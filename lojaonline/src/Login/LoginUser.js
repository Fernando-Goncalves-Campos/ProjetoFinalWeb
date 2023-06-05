import { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function LoginUser({setUser, setLogged, setAdm}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //Usado para redirecionar o usuário para outra rota do site
    const navigate = useNavigate();

    //Adiciona a conta no banco de dados
    const loginDB = async () => {
        const response = await fetch(`http://localhost:5050/users/login`, {
            method: "POST",
            body: JSON.stringify({
                name: username,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if(response.status === 200){
            const loggedUser = await response.json();
            setLogged(true);
            await setUser(loggedUser.user);
            setAdm(loggedUser.adm);
            navigate("/");
        }
        else{
            alert("account doesn't exist or the password is wrong!");
        }
    }

    //Realiza a validação dos dados
    const handleSubmit = (e) => {
        e.preventDefault();

        loginDB();
    };

    return (
        <div id="loginInfo">
            <form onSubmit={handleSubmit}>
                Name:<br /><input type="text" className="inputLogin" name="Username" onChange={(e) => setUsername(e.target.value)} /><br /><br />
                Password:<br /><input type="password" className="inputLogin" name="Password" onChange={(e) => setPassword(e.target.value)} /><br />
                <input type="submit" className="buttonCont buttonForm" id="confirmLogin" value="Submit"/>
            </form>    
        </div>
    );

}


export default memo(LoginUser);