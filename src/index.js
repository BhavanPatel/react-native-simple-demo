import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './Login';
import Main from './Main';

export default class AppMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    if (this.state.isLoggedIn === true) {
      return (<Main/>);
    } else {
      return (<Login/>);
    }
  }
}
