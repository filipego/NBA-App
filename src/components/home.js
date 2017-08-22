import React, { Component } from 'react';


// COMPONENTS
import Featured from './featured';


const URL_HOME = 'http://localhost:3000/home';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      home: ''
    }
  }

  componentDidMount() {
    fetch(URL_HOME, { neathod: 'Get' })
      .then(response => response.json())
      .then(json => {
        this.setState({
          home: json
        });
      })
  }

  render() {
    return (
      <div>
        <Featured slides={this.state.home.slider} />
      </div>
    );
  }
}

export default Home;
