import React from "react";
import "./EditAdm.css";
import { Link } from "react-router-dom";

const EditAdm = ({ user, adms, setAdms }) => {
	const handleDel = (name) => {
		setAdms(adms.filter((adm) => adm.name !== name));
	};
	console.log(adms);
	let v_adm = adms.map((adm) => (
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
	));

	return (
		<div class="div_center">
			<div>{v_adm}</div>
			<Link to="/addAdm" className="">
				New Admin
			</Link>
		</div>
	);
};

export default EditAdm;
