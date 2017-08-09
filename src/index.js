import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Routes from './Routes';

export default class AppMain extends Component {

  render() {
    return (<Routes/>);
  }
}
