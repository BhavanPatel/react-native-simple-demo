import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from '../Login';
import Home from '../Dash';
import Detail from '../Dash/Detail';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  _loginscreen() {
    return (
      <Scene key="root" hideNavBar hideTabBar>
        <Scene key="Home" component={Home} title="Home" />
        <Scene key="Login" component={Login} title="Login" initial/>
        <Scene key="Detail" component={Detail} title="Detail"/>
      </Scene>
      
    );
  }

  _homescreen() {
    return (
      <Scene key="root" hideNavBar hideTabBar>
        <Scene key="Home" component={Home} title="Home" initial/>
        <Scene key="Login" component={Login} title="Login"/>
        <Scene key="Detail" component={Detail} title="Detail"/>
      </Scene>
    );
  }

  render() {
    if (this.state.isLoggedIn === true) {
      return (<Router>{this._homescreen()}</Router>);
    } else {
      return (<Router>{this._loginscreen()}</Router>);
    }
  }
}

export default Routes;
