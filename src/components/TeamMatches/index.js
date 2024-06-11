// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchDetailsList: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatchList()
  }

  getTeamMatchList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const formattedRecentMatches = data.recent_matches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      firstInnings: each.first_innings,
      id: each.id,
      manOfTheMatch: each.man_of_the_match,
      matchStatus: each.match_status,
      result: each.result,
      secondInnings: each.second_innings,
      umpires: each.umpires,
      venue: each.venue,
    }))

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
      recentMatches: formattedRecentMatches,
      teamBannerUrl: data.team_banner_url,
    }
    this.setState({teamMatchDetailsList: formattedData, isLoading: false})
  }

  render() {
    const {teamMatchDetailsList, isLoading} = this.state

    const {teamBannerUrl, latestMatchDetails, recentMatches} =
      teamMatchDetailsList

    return (
      <div className="team-matches-container">
        {isLoading ? (
          <div data-testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <img
            src={teamBannerUrl}
            alt="team banner"
            className="team-banner-img"
          />
        )}

        {isLoading ? (
          <div data-testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        )}
        <ul className="row-container">
          {isLoading ? (
            <div data-testid="loader">
              {' '}
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          ) : (
            recentMatches.map(each => (
              <MatchCard recentMatchesList={each} key={each.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
