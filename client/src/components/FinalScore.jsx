const FinalScore = ({ score, time, onHighScores }) => {
    return (
        <div className="grid-container">
        <h1 className='start'>Game Over</h1>
        <p className='black-text'>Your final score: {score}</p>
        <p className='black-text'>Time taken: {time} seconds</p>

        <button className="submit-button-m">Submit Score</button>
       
        <button className="submit-button-m" onClick={onHighScores}>High Scores</button>

        <button className="submit-button-m" onClick={() => window.location.reload()}>Play Again</button>
    
    
    </div>
    );
  };
  
  export default FinalScore;