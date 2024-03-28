import React, { useState } from 'react';
import AnimeCharacter from './Animevcharacter';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);

  const animeCharacters = [
    { name: 'Goku', emoji: '👦💨' },
    { name: 'Naruto', emoji: '��� ninja' },
    { name: 'Vegeta', emoji: '👱‍♂️💪' },
    // add more characters here...
  ];

  const onGuess = (correct) => {
    if (correct) {
      setScore(score + 1);
    }
    if (currentQuestion < animeCharacters.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizEnded(true);
    }
  };

  return (
    <div>
      {quizEnded ? (
        <div>
          Your score is {score} out of {animeCharacters.length}!
        </div>
      ) : (
        <AnimeCharacter character={animeCharacters[currentQuestion]} onGuess={onGuess} />
      )}
    </div>
  );
};

export default Quiz;