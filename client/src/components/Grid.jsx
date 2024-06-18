import React, { useState, useEffect } from 'react';
import '../App.css';

function Grid() {
  const [cellContent, setCellContent] = useState(() => {
    // Initialize cell content with values, revealed state, bomb status, and flagged status
    const initialContent = Array(10).fill().map((_, rowIndex) => Array(10).fill().map((_, colIndex) => ({
      id: `${rowIndex}-${colIndex}`, // Unique ID based on position
      value: 0,
      revealed: false,
      isBomb: false,
      flagged: false,
    })));
    return initialContent;
  });

  const [gameOver, setGameOver] = useState(false);

  // Function to initialize the game with bombs and their counts
  useEffect(() => {
    const initializeGame = (startRow, startCol) => {
      const newCellContent = cellContent.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isBomb = Math.random() < 0.2; // Adjust bomb probability as needed
          return {
            ...cell,
            id: `${rowIndex}-${colIndex}`, // Ensure id remains consistent after reinitialization
            value: 0,
            revealed: false,
            isBomb,
            flagged: false,
          };
        })
      );

      // Ensure the clicked cell and its neighbors are safe (no bombs)
      const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],         [0, 1],
        [1, -1], [1, 0], [1, 1]
      ];

      directions.forEach(([dRow, dCol]) => {
        const newRow = startRow + dRow;
        const newCol = startCol + dCol;
        if (newRow >= 0 && newRow < 10 && newCol >= 0 && newCol < 10 && !newCellContent[newRow][newCol].isBomb) {
          newCellContent[newRow][newCol].value++;
        }
      });

      // Ensure the starting cell has a value of 0 and is safe
      newCellContent[startRow][startCol] = {
        ...newCellContent[startRow][startCol],
        value: 0,
        revealed: true,
        isBomb: false,
      };

      setCellContent(newCellContent);
    };

    initializeGame(0, 0); // Initialize the game on first load
  }, []); // Only run this effect once on component mount

  // Function to handle cell click
  const handleCellClick = (row, col) => {
    if (gameOver || cellContent[row][col].revealed || cellContent[row][col].flagged) {
      return; // Ignore click if game is over, cell is already revealed, or flagged
    }

    const newCellContent = [...cellContent];

    // If clicked on a bomb, reveal all bombs and end game
    if (newCellContent[row][col].isBomb) {
      newCellContent.forEach(row => row.forEach(cell => {
        if (cell.isBomb) {
          cell.revealed = true;
        }
      }));
      setCellContent(newCellContent); // Update state to reveal bombs
      setGameOver(true); // Set game over state
      return;
    }

    // If clicked on an empty cell, reveal neighbors recursively
    if (newCellContent[row][col].value === 0) {
      revealEmptyCells(newCellContent, row, col);
    }

    // Mark cell as revealed
    newCellContent[row][col].revealed = true;

    setCellContent(newCellContent);
  };

  // Function to recursively reveal empty cells and their neighbors
  const revealEmptyCells = (cells, row, col) => {
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],         [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];

    directions.forEach(([dRow, dCol]) => {
      const newRow = row + dRow;
      const newCol = col + dCol;
      if (newRow >= 0 && newRow < 10 && newCol >= 0 && newCol < 10 && !cells[newRow][newCol].revealed) {
        cells[newRow][newCol].revealed = true;
        if (cells[newRow][newCol].value === 0) {
          revealEmptyCells(cells, newRow, newCol);
        }
      }
    });
  };

  // Function to handle right-click (context menu) to toggle flagging
  const handleContextMenu = (e, row, col) => {
    e.preventDefault(); // Prevent right-click context menu

    if (gameOver || cellContent[row][col].revealed) {
      return; // Ignore if game is over or cell is already revealed
    }

    const newCellContent = [...cellContent];
    newCellContent[row][col].flagged = !newCellContent[row][col].flagged;
    setCellContent(newCellContent);
  };

  // Create the grid JSX
  const rows = cellContent.map((row, rowIndex) => (
    <div key={rowIndex} className="row">
      {row.map((cell, colIndex) => (
        <button
          key={cell.id} // Use unique id as key
          className={`cell ${cell.revealed ? 'revealed' : ''}`}
          onClick={() => handleCellClick(rowIndex, colIndex)}
          onContextMenu={(e) => handleContextMenu(e, rowIndex, colIndex)}
        >
          {cell.revealed ? (cell.isBomb ? '💣' : (cell.value === 0 ? '' : cell.value)) : (cell.flagged ? '🚩' : '')}
        </button>
      ))}
    </div>
  ));

  return <div className="grid">{rows}</div>;
}

export default Grid;