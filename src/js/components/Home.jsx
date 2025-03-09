import React from "react";
import Container from "./Container";
import CronoDecrease from "./CronoDecrease";
import Temporizador from "./Temporizador.jsx";

const Home = () => {
	return (
		<div className="container-fluid" style={{ backgroundColor: "orange" }}>
			<Container />
			<CronoDecrease />
			<Temporizador />
		</div>
	)
}

export default Home;