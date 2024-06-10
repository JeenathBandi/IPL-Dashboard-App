// Write your code here
import './index.css'
import {Component} from 'react'

import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {teamMatchDetailsList: []}

  componentDidMount() {
    this.getTeamMatchList()
  }

  getTeamMatchList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedLatestMatch = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const formattedData = {
      latestMatchDetails: formattedLatestMatch,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    this.setState({teamMatchDetailsList: formattedData})
  }

  render() {
    const {teamMatchDetailsList} = this.state

    const {teamBannerUrl, latestMatchDetails} = teamMatchDetailsList
    console.log(latestMatchDetails)

    return (
      <div className="team-matches-container">
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-img"
        />
        <LatestMatch latestMatchDetails={latestMatchDetails} />
      </div>
    )
  }
}

export default TeamMatches
