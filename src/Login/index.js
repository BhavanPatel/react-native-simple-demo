import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Signin from './Signin';
import Main from '../Main';

class Login extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar hideTabBar>
          <Scene key="Signin" component={Signin} title="Signin" initial/>
          <Scene key="Main" component={Main} title="Main"/>
        </Scene>
      </Router>
    );
  }
}

export default Login;
