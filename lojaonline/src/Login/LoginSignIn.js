import { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function LoginSignIn({props}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    //Usado para redirecionar o usuário para outra rota do site
    const navigate = useNavigate();
    
    //Realiza a validação dos dados
    const handleSubmit = async (e) => {
        e.preventDefault();

        //Asseguram que não existam outros usuários com o mesmo nome
        const accountCustomer = props.customers.find((user) => user.name === username);
        const accountAdm = props.adms.find((user) => user.name === username);
        if (accountCustomer || accountAdm) {
            alert("Account already exists!!!")
        }
        else{
            //Faz o login
            props.setLogged(true);
            props.setUser({
                name: username,
                email: email,
                phone: phone,
                password: password,
                address: address,
                cart: []
            });
            

            //Adiciona a conta à lista de usuários
            props.setCustomers(prevCustomers => [
                ...prevCustomers,
                {
                    name: username,
                    email: email,
                    phone: phone,
                    password: password,
                    address: address,
                    cart: []
                }
            ]);
            navigate("/");
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