const FinalScore = ({ score, time }) => {
    return (
      <div className="final-score-container">
        <h1>Game Over</h1>
        <p>Your final score: {score}</p>
        <p>Time taken: {time} seconds</p>
        {/* Additional content or navigation options can be added here */}
      </div>
    );
  };
  
  export default FinalScore;