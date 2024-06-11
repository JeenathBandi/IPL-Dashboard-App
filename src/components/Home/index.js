// Write your code here

import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplItemList: [], isLoading: true}

  componentDidMount() {
    this.getItemList()
  }

  getItemList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const formatedData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({iplItemList: formatedData, isLoading: false})
  }

  render() {
    const {iplItemList, isLoading} = this.state
    return (
      <div className="home-container">
        <div className="ipl-logo-name-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-img"
          />
          <h1 className="ipl-dashboard">IPL Dashboard</h1>
        </div>
        <ul className="row-container">
          {isLoading ? (
            <div data-testid="loader">
              {' '}
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          ) : (
            iplItemList.map(each => (
              <TeamCard iplItemList={each} key={each.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default Home
            
