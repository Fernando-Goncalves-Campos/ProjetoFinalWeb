import { memo } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "./UserBtn.css";

function UserBtn({ user, setUser, logged, setLogged, adm, setAdm }) {
	let location = useLocation();

	//Usado para redirecionar o usuário para outra rota do site
	const navigate = useNavigate();

	//Desfaz o login do usuário
	async function logout() {
		navigate("/");
		await setLogged(false);
		await setAdm(false);
		await setUser({ name: "" });
	}

	//Caso esteja na página de login ele remove o botão
	if (location.pathname === "/login") {
		return <></>;
	}

	//Caso não esteja logado ele mostra o botão para fazer o login
	else if (!logged) {
		return (
			<Link id="loginNav" to="/login">
				Login
			</Link>
		);
	}

	//Caso seja um adm ele cria um menu com as funções próprias do adm
	else if (adm) {
		return (
			<div id="userNav">
				<input type="checkbox" id="menu"></input>
				<label htmlFor="menu">{user.name}</label>
				<div className="menu-content">
					<ul>
						<li>
							<Link to="/addItem">Add Item</Link>
						</li>
						<li>
							<Link to="/editAdm">Edit Adm</Link>
						</li>
						<li>
							<button id="userNav" onClick={() => logout()}>
								Logout
							</button>
						</li>
					</ul>
				</div>
			</div>
		);
	}

	//Caso seja um cliente ele cria um menu com as funções do cliente
	else {
		return (
			<div id="userNav">
				<input type="checkbox" id="menu"></input>
				<label htmlFor="menu">{user.name}</label>
				<div className="menu-content">
					<ul>
						<li>
							<Link to="/cart">Cart</Link>
						</li>
						<li>
							<button id="userNav" onClick={() => logout()}>
								Logout
							</button>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default memo(UserBtn);
