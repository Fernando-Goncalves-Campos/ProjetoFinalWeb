import React, { useEffect, useState } from "react";
import "./EditAdm.css";
import { Link } from "react-router-dom";

const EditAdm = ({ user }) => {
	//Lê os adms do banco de dados
	const [v_adm, setV_adm] = useState([]);

	//Cria a lista de adms que será exibida
	const updateDisplay = (adms) => {
		setV_adm(
			adms.map((adm) => (
				<div className="admDiv">
					<div className="admText">
						<strong>Nome:</strong> {adm.name}
						<br />
						<strong> E-mail:</strong> {adm.email}
						<br />
						<strong> Phone:</strong> {adm.phone}
					</div>
					<div className="admDelBtnDiv">
						{user.name !== adm.name ? (
							<button
								className="admDelBtn"
								onClick={() => {
									handleDel(adm.name);
								}}
							>
								X
							</button>
						) : (
							<></>
						)}
					</div>
				</div>
			))
		);
	};

	//Lê os adms do banco de dados
	async function getAdms() {
		const response = await fetch(`http://localhost:5050/users/adms`);

		if (!response.ok) {
			const message = `An error occurred: ${response.statusText}`;
			console.log(message);
			return;
		}

		const adms = await response.json();
		await adms.sort((a, b) => (a.name < b.name ? 1 : -1));
		updateDisplay(adms);
	}

	useEffect(() => {
		getAdms();
	}, []);

	//Remove o item do banco de dados
	const removeAdmDB = async (name) => {
		await fetch(`http://localhost:5050/users/adm/${name}`, {
			method: "DELETE",
		});
	};

	//Função do botão de remover adm
	const handleDel = async (name) => {
		await removeAdmDB(name);
		getAdms();
	};

	return (
		<div className="div_center">
			<div>{v_adm}</div>
			<Link to="/addAdm" className="newAdm">
				New Admin
			</Link>
		</div>
	);
};

export default EditAdm;
