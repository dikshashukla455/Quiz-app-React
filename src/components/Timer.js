import React from "react";

function Timer({ timeRemaining }) {
	const timeClock = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
	};
	const timer = timeClock(timeRemaining);
	return (
		<div className="timer-section">
			{timer !== "NaN:NaN" && `Time Remaining - ${timer}`}
		</div>
	);
}

export default Timer;
