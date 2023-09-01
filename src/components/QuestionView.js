function QuizQuestion({
	question,
	options,
	selectedChoice,
	onChoiceSelect,
	onNextHandler,
	onPrevHandler,
	onSubmitHandler,
	allQuestionsAnswered,
	submitted,
    visited
}) {
	return (
		<div className="quiz-question">
			<h2>{question}</h2>
			<ul>
				{options.map((choice, index) => (
					<li
						key={index}
						className={` ${selectedChoice === choice ? "selected"  : ""} ${visited ? 'visited' : ''}`}
						onClick={() => onChoiceSelect(choice)}
					>
						{choice}
					</li>
				))}
			</ul>
			<div className="navigation-buttons">
				<button onClick={onPrevHandler} disabled={selectedChoice === submitted}>
					Previous
				</button>
				<button onClick={onNextHandler} disabled={selectedChoice === submitted}>
					Next
				</button>
				{!submitted && allQuestionsAnswered && (
					<button onClick={onSubmitHandler}>Submit</button>
				)}
			</div>
		</div>
	);
}
export default QuizQuestion;
