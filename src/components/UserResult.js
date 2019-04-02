import React, { Component } from 'react';

class UserResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'cuz'
    };
  }

  render() {
    return <div>{this.state.name}</div>;
  }
}

export default UserResult;
