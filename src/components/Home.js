import React from 'react';
import {useNavigate} from "react-router-dom"

const Home = () => {
const navigate = useNavigate();
	
return (
	<>
		<h1 style={{color:"blue"}}>ThePowerHouse</h1>
		<p>Quality Content for Quality Learning</p>
		<button onClick={()=>navigate("/about")}>About</button>
	</>
)
};

export default Home;