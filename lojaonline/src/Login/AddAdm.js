import { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function AddAdm({customers, adms, setAdms}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    //Usado para redirecionar o usuário para outra rota do site
    const navigate = useNavigate();
    
    //Realiza a validação dos dados
    const handleSubmit = async (e) => {
        e.preventDefault();

        //Assegura que não existem outros adms com o mesmo nome
        const accountCustomer = customers.find((user) => user.name === username);
        const accountAdm = adms.find((user) => user.name === username);
        if (accountCustomer || accountAdm) {
            alert("Account already exists!!!")
        }


        else{
            //Adiciona o adm à lista
            setAdms(prevAdms => [
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

                <input type="submit" className="buttonCont buttonForm" id="confirmLogin" value="Submit"/>
            </form>    
        </div>
    );
}


export default memo(AddAdm);