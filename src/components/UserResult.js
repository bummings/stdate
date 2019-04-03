import React, { Component } from 'react';
import Axios from 'axios';

const id = 1;

class UserResult extends Component {
  constructor() {
    super();

    this.state = {
      user: [],
      nickname: 'cuz'
    };
  }

  componentDidMount() {
    Axios.get(`http://localhost:5000/users/${id}`)
      // .then(console.log(res))
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
