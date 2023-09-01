# React Quiz Application

This is a React-based quiz application that allows users to take a quiz consisting of 15 questions. It features a timer, question navigation, and the ability to submit answers. After submitting, users can view a report that displays their answers and correct answers side by side.

## Components

The application is divided into several components:

- **StartPage**: Collects the user's email and starts the quiz.
- **QuestionView**: Displays a single quiz question and options, handles user selections, and navigation between questions.
- **QuestionPanel**: Shows an overview of all questions with indicators for visited and attempted questions.
- **Timer**: Displays a countdown timer.
- **ResultPage**: Shows the user's answers and correct answers after submission.
- **Navbar**: Displays navigation and timer at the top of the app.

## Setup Instructions

To run the application:

1. Clone the project repository.
2. Navigate to the project folder in your terminal.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Open a web browser and go to `http://localhost:3000` to view the application.

## Assumptions

- It is assumed that the quiz will always have 15 questions.
- User email collection is done on the start page, but it's not used elsewhere in the app.

## Challenges and Solutions

- Managing the timer and auto-submit functionality was a challenge. It was overcome by using `useEffect` to decrement the timer and trigger auto-submission.

- Keeping track of the current question, visited questions, and user answers required careful state management. This was achieved using React state and state update functions.

Overall, the application provides a complete quiz-taking experience with a user-friendly interface and smooth transitions between questions. It effectively manages state and user interactions to deliver a seamless quiz experience.

