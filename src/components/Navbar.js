import React from "react";
import Timer from "./Timer";

function Navbar({timeRemaining}) {
	return (
		<div className="navbar">
			<div className="logo">Quiz App</div>
			<div className="timer">
				<Timer timeRemaining={timeRemaining}/>
			</div>
		</div>
	);
}

export default Navbar;
