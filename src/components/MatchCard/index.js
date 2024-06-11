// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchesList} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} =
    recentMatchesList

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-img"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="competing-team-name">{result}</p>
      <p className="competing-team-name">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
