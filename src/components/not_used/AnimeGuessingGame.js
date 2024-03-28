import React, { useState } from 'react';
import AnimeCard from './AnimeCard';
import WinOrLoseCard from './WinOrLoseCard';
import '../index.css';

const AnimeGuessingGame = () => {
    const animeData = [
        {
          title: 'naruto',
          emoji: '🍥 🍥 ninja',
        },
        {
          title: 'onepiece',
          emoji: '👨‍✈️ 🏴‍☠️ pirate',
        },
        {
          title: 'dragon',
          emoji: '👹🔨🐼⛩🦹🏼‍♂️ pirate',
        },
        {
          title: 'seven',
          emoji: '🎣⛓🃏🌃🐜 pirate',
        },
        // ... more anime titles and emojis
      ];
  const [currentAnime, setCurrentAnime] = useState(null);
  const [userGuess, setUserGuess] = useState('');

  const pickAnime = () => {
    const randomIndex = Math.floor(Math.random() * animeData.length);
    setCurrentAnime(animeData[randomIndex]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userGuess.toLowerCase() === currentAnime.title.toLowerCase()) {
      alert('Correct!');
      setUserGuess('');
      pickAnime();
    } else {
      alert('Incorrect. Try again!');
      setUserGuess('');
    }
  };

  return (
    <div className="anime-guessing-game-container">
      <h1>Anime Emoji Guessing Game</h1>
      <AnimeCard
        emoji={currentAnime ? currentAnime.emoji : 'Click the button to start'}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={pickAnime}>Start the game</button>
    </div>
  );
};

export default AnimeGuessingGame;