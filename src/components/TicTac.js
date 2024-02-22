import React, { useState } from 'react'

function TicTac() {
    const [grid, setGrid] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const checkWinner = (grid) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        return grid[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    if (grid[index] || checkWinner(grid)) {
      return;
    }

    const newGrid = [...grid];
    newGrid[index] = turn ? "X" : "O";
    setGrid(newGrid);
    setTurn(!turn);

    const winner = checkWinner(newGrid);
    if (winner) {
      setDisabled(true);
      alert(`Player ${winner} wins!`);
    }
  };
  return (
    <div>
        <audio id="click-sound" src="click-sound.mp3"></audio>
        <button onClick={() => {
            document.getElementById("click-sound").play();
            handleClick(0);
        }} disabled={disabled}>
            {grid[0]}
        </button>
        {/* ... repeat for other buttons ... */}
    </div>
  );
};

export default TicTac


