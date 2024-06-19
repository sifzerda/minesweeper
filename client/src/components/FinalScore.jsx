const FinalScore = ({ score, time, onHighScores }) => {
    return (
        <div className="grid-container">
        <h1 className='start'>Game Over</h1>
        <p className='black-text'>Your final score: {score}</p>
        <p className='black-text'>Time taken: {time} seconds</p>
        {/* Additional content or navigation options can be added here */}
        <button className="submit-button-m" onClick={() => window.location.reload()}>Play Again</button>
        <button className="submit-button-m" onClick={onHighScores ? onHighScores : () => {}}>High Scores</button>
    </div>
    );
  };
  
  export default FinalScore;