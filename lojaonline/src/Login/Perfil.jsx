import React from "react";
import "./Perfil.css";

const Perfil = ({ user }) => {
	return (
		<div id="divPerfil">
			<p className="textPerfil">
				Name: {user.name}
				<br />
				<br />
				Password: {user.password}
				<br />
				<br />
				Email: {user.email}
				<br />
				<br />
				Phone: {user.phone}
				<br />
				<br />
				Address: {user.adress}
				<br />
			</p>
		</div>
	);
};

export default Perfil;
