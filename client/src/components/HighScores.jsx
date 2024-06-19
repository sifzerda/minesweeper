import '../App.css'; // Assuming App.css is your stylesheet for styling

const HighScores = () => {
  // Dummy data for high scores (can be fetched from API or stored in state/props)
  const highScores = [
    { id: 1, name: 'Player1', score: 100, time: 45 },
    { id: 2, name: 'Player2', score: 90, time: 55 },
    { id: 3, name: 'Player3', score: 85, time: 60 },
    { id: 4, name: 'Player4', score: 80, time: 65 },
    { id: 5, name: 'Player5', score: 75, time: 70 },
  ];

  return (
    <div className="high-scores-container">
      <h1>High Scores</h1>
      <table className="high-scores-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Time (seconds)</th>
          </tr>
        </thead>
        <tbody>
          {highScores.map((score, index) => (
            <tr key={score.id}>
              <td>{index + 1}</td>
              <td>{score.name}</td>
              <td>{score.score}</td>
              <td>{score.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-container">
        <button className="submit-button-m" onClick={() => window.location.reload()}>Back to Game</button>
      </div>
    </div>
  );
};

export default HighScores;