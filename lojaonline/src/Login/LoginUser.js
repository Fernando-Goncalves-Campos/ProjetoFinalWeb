import { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function LoginUser({props}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //Usado para redirecionar o usuário para outra rota do site
    const navigate = useNavigate();

    //Realiza a validação dos dados
    const handleSubmit = (e) => {
        e.preventDefault();

        //Verifica se a conta existe e se a senha está correta
        let account = props.customers.find((user) => user.name === username);
        if (account && account.password === password) {
            props.setLogged(true);
            props.setUser(account);
            navigate("/");
        }
        else{
            account = props.adms.find((user) => user.name === username);
            if (account && account.password === password) {
                props.setLogged(true);
                props.setAdm(true);
                props.setUser(account);
                navigate("/");
            }

            else{
                alert("account doesn't exist or the password is wrong!");
            }
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