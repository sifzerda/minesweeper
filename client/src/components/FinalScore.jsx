import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { QUERY_ME } from '../utils/queries';
import { SAVE_MINE_SCORE } from '../utils/mutations'
import '../App.css';

const FinalScore = ({ score, time, onHighScores }) => {
    return (
        <div className="grid-container">
        <h1 className='start'>Game Over</h1>
        <p className='black-text'>Your final score: {score}</p>
        <p className='black-text'>Time taken: {time} seconds</p>


 {/* Conditional log in button to submit score */}
        {Auth.loggedIn() ? (
            <button className="submit-button-m">Submit Score</button>
            ) : (
                <p className='black-text'> You must
                    <Link to="/login">LOG IN</Link> or <Link to="/signup">SIGNUP</Link> to Submit a Score.
                </p>
            )}

        <button className="submit-button-m" onClick={onHighScores}>High Scores</button>

        <button className="submit-button-m" onClick={() => window.location.reload()}>Play Again</button>
    
    
    </div>
    );
  };
  
  export default FinalScore;