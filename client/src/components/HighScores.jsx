import '../App.css'; // Assuming App.css is your stylesheet for styling
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

const HighScores = () => {
  const { loading, data, error } = useQuery(QUERY_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const users = data.users; // Extracting users from query data

  // Aggregate all mineScore entries with associated usernames
  let allScores = [];
  users.forEach(user => {
    user.mineScore.forEach(score => {
      allScores.push({
        username: user.username,
        minePoints: score.minePoints,
        mineTimeLeft: score.mineTimeLeft,
      });
    });
  });

  // Sort combined scores by mineTimeLeft in descending order
  allScores.sort((a, b) => b.mineTimeLeft - a.mineTimeLeft);

  return (
    <div className="grid-container">
      <h1 className='end'>High Scores</h1>
      <table className="high-scores-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Score</th>
            <th>Time left</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {allScores.map((score, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{score.minePoints}</td>
              <td>{score.mineTimeLeft}</td>
              <td>{score.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="submit-button-m" onClick={() => window.location.reload()}>Back to Game</button>
    </div>
  );
};

export default HighScores;