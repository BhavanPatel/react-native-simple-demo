import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Home from './Home';
import SideNavBar from './SideMenu';
import Detail from './Detail';
import Login from '../Login';

class Main extends Component {
  render() {
    return (
        <Router>
          <Scene key="root" hideNavBar hideTabBar>
            <Scene key="Home" component={Home} title="Home" initial/>
            <Scene key="Login" component={Login} title="Login"/>
            <Scene key="Detail" component={Detail} title="Detail"/>
          </Scene>
        </Router>
    );
  }
}

export default Main;
