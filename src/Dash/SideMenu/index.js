import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
  Header,
  Left,
  Body,
  Title,
  Right,
  Icon
} from 'native-base';
import {Actions} from 'react-native-router-flux';

var menuOptions = [

  {
    name: 'Home',
    icon: 'home',
    id: 'Home'
  }, {
    name: 'Logout',
    icon: 'log-out',
    id: 'Logout'
  }
];

class SideNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: true
    };
    this._onClick = this._onClick.bind(this);
  }

  _onClick(ids) {
    this.props.closeSideBar(this);
    if (ids === 'Home') {
      Actions.Home();
    }
    if (ids === 'Logout') {
      Actions.Login();
    }
  }

  _listMenu(data) {
    return (
      <ListItem onPress={() => this._onClick(data.id)} icon>
        <Left>
          <Icon name={data.icon}/>
        </Left>
        <Body>
          <Text >{data.name}</Text>
        </Body>
        <Right/>
      </ListItem>
    );
  }

  render() {
    return (
      <Container>
        <Content style={{
          backgroundColor: 'white'
        }}>
          <Header >
            <Left/>
            <Body>
              <Title>Side Menu</Title>
            </Body>
            <Right/>
          </Header>
          <List >
            <List dataArray={menuOptions} renderRow={this._listMenu.bind(this)}/>
          </List>
        </Content>
      </Container>
    );

  }
}

export default SideNavBar;
