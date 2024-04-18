import '../style/Anime_Quiz.css'
import React, { useState } from "react";
import questions from './Anime_Api.js';

function Anime_Quiz() {
  // Нийт оноо, асуултын дугаар, оноо
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);


  // Сонголтуудаас сонгох үед зөв бол оноо нэмэгдэнэ 
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

  // Нийт өгөгдлийн index-ны тоогоор +1 нэмэгдэж дууссан бол эцсийн хариулт гаргана
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Дахин эхлүүлэх */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
          {/* 2. Үндсэн харагдах хэсэг  */}
          <div className="header">
            <h1>Аниме холбогдолтой сонирхолтой Quiz асуулт</h1>
          </div>
      {/* 3. Эцсийн үр дүн болон Эхлэл хэсэг IF нөхцөлтэй  */}
      <div className="content">
      {showResults ? (
        /* 4. Эцсийн дүн */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : ( 
        /* 5. Quiz контент класс   */
        <div className="question-card">
          {/* Одоо байрлаж буй асуулт  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* Асуултуудаа API буюу maniul өгөгдөл давтана  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      </div>
    </div>
  );
}

export default Anime_Quiz;
