import '../App.css'; // Assuming App.css is your stylesheet for styling

const StartGame = ({ onStartGame, onHighScores }) => {
  return (
    <div className="start-screen">
      <h1>Minesweeper Game</h1>
      <p>Click the button below to start the game!</p>
      <button className="submit-button-m" onClick={onStartGame}>Start Game</button>
      <button className="submit-button-m" onClick={onHighScores}>High Scores</button>
    </div>
  );
};

export default StartGame;