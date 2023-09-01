import React from "react";

function QuestionOverview({
	questions,
	visitedQuestions,
	attemptedQuestions,
	onQuestionClick,
}) {
	return (
		<div className="question-overview">
			<h3>Question Overview</h3>
			<div className="question-no">
				{questions.map((_, index) => (
					<div
						key={index}
						className={`question-item ${
							visitedQuestions.includes(index) ? "visited" : ""
						} ${attemptedQuestions.includes(index) ? "attempted" : ""} ${
							index >= 9 && "question-twoDigit"
						}`}
						onClick={() => onQuestionClick(index)}
					>
						{index + 1}
					</div>
				))}
			</div>
		</div>
	);
}

export default QuestionOverview;
