import React, { useState } from 'react';

function App(){

  const [questions, setQuestions] = useState([
    { question: '1: Can you code in Ruby?', answer: 'Yes' },
    { question: '2: Can you code in JavaScript?', answer: 'Yes' },
    { question: '3: Can you code in Swift?', answer: 'Yes' },
    { question: '4: Can you code in Java?', answer: 'Yes' },
    { question: '5: Can you code in C#?', answer: 'Yes' }

  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
// 100 * number of yes answers/number of questions\

  const handleAnswer = (response) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (response === currentQuestion.answer) {
      console.log(response, currentQuestion.answer)
      setScore(score + 1);
    }
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setTotalScore(totalScore + score);
      alert("Your total score is " + 100*score/questions.length);
      setScore(0);
      setCurrentQuestionIndex(0);
    }
  };

  return (
    <div>
      <h1>Questions</h1>
      {currentQuestionIndex < questions.length && (
        <div>
          <p>{questions[currentQuestionIndex].question}</p>
          <button onClick={() => handleAnswer('Yes')}>Yes</button>
          <button onClick={() => handleAnswer('No')}>No</button>
        </div>
      )}
      {currentQuestionIndex === questions.length && (
        <div>
          <p>Overall Score: {totalScore}</p>
        </div>
      )}
    </div>
  );
}

export default App;