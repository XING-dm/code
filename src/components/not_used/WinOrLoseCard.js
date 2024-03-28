import React from 'react';
import '../index.css';

const WinOrLoseCard = ({ win, lose }) => {
  return (
    <div className={`win-or-lose-card ${win ? 'win' : lose ? 'lose' : ''}`}>
      {win ? (
        <>
          <h2>You won!</h2>
          <p>Great job! Click the button below to start a new game.</p>
        </>
      ) : lose ? (
        <>
          <h2>You lost!</h2>
          <p>Try again! Click the button below to start a new game.</p>
        </>
      ) : (
        <p>Click the button to start the game.</p>
      )}
    </div>
  );
};

export default WinOrLoseCard;