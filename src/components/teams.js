import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

const URL_TEAMS = 'http://localhost:3000/teams';

const fadeAnimation = {
  transitionName: "fade",
  transitionAppear: true,
  transitionAppearTimeout: 500,
  transitionEnter: true,
  transitionEnterTimeout: 500,
  transitionLeave: true,
  transitionLeaveTimeout: 500
}

class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      filtered: [],
      keywords: ''
    };
  }

  componentDidMount() {
    fetch(URL_TEAMS, { method: 'GET' })
    .then(response => response.json())
    .then(json => {
      this.setState({
        teams: json,
        filtered: json
      })
    });
  }

  renderList = ({ filtered }) => {
    return filtered.map((item) => {
      return (
        <Link to={`/team/${item.name}`} key={item.id} className="team_item">
          <img alt={item.name} src={`/images/teams/${item.logo}`} />
        </Link>
      )
    });
  }

  render() {
    return (
      <div className="teams_component">
        <div className="teams_input">
          <input
            type="text"
            placeholder="Search for a team"
          />
        </div>
        <div className="teams_component">
          <CSSTransitionGroup {...fadeAnimation}>
            {this.renderList(this.state)}
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }

}

export default Teams;
