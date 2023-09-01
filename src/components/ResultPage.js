import React from "react";

function ReportPage({ questions, userAnswers }) {
	var correct_count = 0;
	var incorrect_count = 0;
	return (
		<div className="report-page">
			<h1 style={{ textTransform: "uppercase" }}>Results</h1>
			{questions.map((question, index) => (
				<div key={index} className="report-item">
					<p>
						<b>Question {index + 1}</b>: {question.question}
					</p>
					<div style={{ display: "none" }}>
						{userAnswers[index] !== question.correct_answer
							? incorrect_count++
							: correct_count++}
					</div>
					<div
						className=""
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<p>
							Your Answer:{" "}
							{userAnswers[index] ? userAnswers[index] : "Not Answered"}
						</p>{" "}
						&nbsp;&nbsp;
						<p style={{ fontSize: "24px", color: "grey" }}> | </p> &nbsp;&nbsp;
						<p style={{ color: "green" }}>
							Correct Answer: {question.correct_answer}
						</p>
					</div>
				</div>
			))}
			<hr />
			<br />
			Correct Answers: {correct_count} ✅ &nbsp; Wrong Answers:{" "}
			{incorrect_count} ❌
			<br />
			<br />
		</div>
	);
}

export default ReportPage;
