import React, { useState, useEffect } from "react";
import "./App.css"; // Import your CSS file

import StartPage from "./components/StartPage";
import QuestionView from "./components/QuestionView";
import QuestionPanel from "./components/QuestionPanel";
import ResultPage from "./components/ResultPage";
import Navbar from "./components/Navbar";

function App() {
	const [questions, setQuestions] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [userAnswers, setUserAnswers] = useState(Array(15).fill(""));
	const [visitedQuestions, setVisitedQuestions] = useState([]);
	const [attemptedQuestions, setAttemptedQuestions] = useState([]);
	const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes in seconds
	const [quizStarted, setQuizStarted] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleAutoSubmit = () => {
		if (!submitted) {
			setSubmitted(true); // Auto-submit the quiz
		}
	};

	const allQuestionsAnswered = userAnswers.every((answer) => answer !== "");

	useEffect(() => {
		fetch("https://opentdb.com/api.php?amount=15")
			.then((response) => response.json())
			.then((data) => {
				const quizQuestions = data.results.map((result) => ({
					question: result.question,
					choices: [result.correct_answer, ...result.incorrect_answers],
					correct_answer: result.correct_answer,
				}));
				setQuestions(quizQuestions);
			});
	}, []);

	useEffect(() => {
		if (quizStarted && timeRemaining > 0) {
			const timer = setInterval(() => {
				setTimeRemaining((prevTime) => prevTime - 1);
			}, 1000);

			return () => clearInterval(timer);
		} else if (timeRemaining === 0) {
			handleAutoSubmit(); // Call the auto-submit function when time is up
		}
	}, [quizStarted, timeRemaining, submitted]);

	const handleStartQuiz = () => {
		setQuizStarted(true);
	};

	const handleChoiceSelect = (choice) => {
		const updatedUserAnswers = [...userAnswers];
		updatedUserAnswers[currentQuestion] = choice;
		setUserAnswers(updatedUserAnswers);

		if (!visitedQuestions.includes(currentQuestion)) {
			setVisitedQuestions([...visitedQuestions, currentQuestion]);
		}

		if (!attemptedQuestions.includes(currentQuestion)) {
			setAttemptedQuestions([...attemptedQuestions, currentQuestion]);
		}
	};

	const handleNextQuestion = () => {
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		}
	};

	const handlePrevQuestion = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion(currentQuestion - 1);
		}
	};

	const handleQuestionClick = (index) => {
		setCurrentQuestion(index);
		if (!visitedQuestions.includes(index)) {
			setVisitedQuestions([...visitedQuestions, index]);
		}
	};
	const handleSubmit = () => {
		if (!submitted) {
			setSubmitted(true); // Manual submission
		}
	};

	if (!quizStarted) {
		return <StartPage onStartQuiz={handleStartQuiz} />;
	}

	if (!submitted && currentQuestion < questions.length) {
		return (
			<>
				<Navbar timeRemaining={timeRemaining} />
				<div className="quiz-app">
        
					<QuestionView
						question={questions[currentQuestion].question}
						options={questions[currentQuestion].choices}
						selectedChoice={userAnswers[currentQuestion]}
						onChoiceSelect={handleChoiceSelect}
						onNextHandler={handleNextQuestion}
						onPrevHandler={handlePrevQuestion}
						onSubmitHandler={handleSubmit}
						allQuestionsAnswered={allQuestionsAnswered}
						submitted={submitted}
						visited={visitedQuestions.includes(currentQuestion)}
					/>
					<QuestionPanel
						questions={questions}
						visitedQuestions={visitedQuestions}
						attemptedQuestions={attemptedQuestions}
						onQuestionClick={handleQuestionClick}
					/>
				</div>
			</>
		);
	}

	return (
		<>
			<Navbar />
			<div className="">
				{submitted && (
					<ResultPage questions={questions} userAnswers={userAnswers} />
				)}
			</div>
		</>
	);
}

export default App;
