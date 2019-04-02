import React, { Component } from 'react';
import Axios from 'axios';

const id = 1;

class UserResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      nickname: 'cuz'
    };
  }

  componentDidMount() {
    // const { id } = this.props.match.params;
    Axios.get(`http://localhost:5000/users/1`)
      .then(res => this.setState({ user: res.data.result }))
      .then(console.log(this.state.user))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>{this.state.nickname}</h1>
        <h4>{this.state.user}</h4>
      </div>
    );
  }
}

export default UserResult;
