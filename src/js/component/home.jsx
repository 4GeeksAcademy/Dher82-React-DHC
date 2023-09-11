import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";
import Card from "./card.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<div>
				<Navbar />
				<Jumbotron />
				<Card />
				<Footer />
			</div>
		</>
	);
};

export default Home;
