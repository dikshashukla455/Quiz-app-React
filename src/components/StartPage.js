import React, { useState } from "react";
import Navbar from "./Navbar";

function StartPage({ onStartQuiz }) {
	const [email, setEmail] = useState("");

	const onHandlerStart = () => {
		if (email) {
			onStartQuiz();
		}
	};

	return (
        <>
        <Navbar />
		<div className="start-page">
			<input
				type="email"
				placeholder="Enter your valid email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
                required
			/>
			<button onClick={onHandlerStart}>Start Quiz</button>
		</div>
        </>
	);
}

export default StartPage;
