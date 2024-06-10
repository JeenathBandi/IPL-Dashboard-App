// Write your code here
import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      id,
      manOfTheMatch,
      matchStatus,
      result,
      secondInnings,
      umpires,
      venue,
    } = latestMatchDetails
    return (
      <div className="latest-match-container">
        <p className="latest-matches-heading">Latest Matches</p>
        <div className="latest-match-item">
          <div className="first-container">
            <h1 className="competing-team">{competingTeam}</h1>
            <p className="date">{date}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
