// Write your code here
import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      competingTeam,
      date,
      venue,
      result,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      umpires,
    } = latestMatchDetails
    return (
      <div className="latest-match-container">
        <p className="latest-matches-heading">Latest Matches</p>
        <div className="latest-match-item">
          <div className="first-container">
            <p className="competing-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="venue">{result}</p>
          </div>
          <div className="middle-container">
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="competing-img"
            />
          </div>
          <div className="last-container">
            <p className="heads">First Innings</p>
            <p className="heads-content">{firstInnings}</p>
            <p className="heads">Second Innings</p>
            <p className="heads-content">{secondInnings}</p>
            <p className="heads">Man Of The Match</p>
            <p className="heads-content">{manOfTheMatch}</p>
            <p className="heads">Umpires</p>
            <p className="heads-content">{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
