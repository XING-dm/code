import React, { useState } from 'react';

const Animecharacter = ({ character, onGuess }) => {
  const [guess, setGuess] = useState('');
  const [correct, setCorrect] = useState(false);

  const handleGuess = (event) => {
    event.preventDefault();
    if (guess.toLowerCase() === character.name.toLowerCase()) {
      setCorrect(true);
      onGuess(true);
    } else {
      onGuess(false);
    }
  };

  return (
    <div>
      <div>{character.emoji}</div>
      <form onSubmit={handleGuess}>
        <input type="text" value={guess} onChange={(e) => setGuess(e.target.value)} />
        <button type="submit">Guess</button>
      </form>
      {correct && <div>Correct!</div>}
    </div>
  );
};

export default Animecharacter;