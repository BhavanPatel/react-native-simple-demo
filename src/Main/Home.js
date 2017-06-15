import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Text,
  Button,
  Label,
  Container,
  Header,
  Left,
  Icon,
  Body,
  Title,
  Right,
  List,
  ListItem,
  Thumbnail,
  Drawer,
  Content
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Popover from 'react-native-popover';
import SideNavBar from './SideMenu';
const userImg = require('../assets/user.png');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  openDrawer() {
    this._drawer._root.open();
  };

  closeDrawer() {
    this._drawer._root.close();
  };

  _onOption() {
    Actions.Detail();
  }

  _goDetail() {
    Actions.Detail();
  }

  _logOut() {
    Actions.Login();
  }

  render() {
    return (
      <Drawer ref={(ref) => {
        this._drawer = ref;
      }} content={< SideNavBar navigator = {
        this._navigator
      }
      closeSideBar = {
        () => this.closeDrawer()
      } />} onClose={() => this.closeDrawer()}>
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={this.openDrawer.bind(this)}>
                <Icon name='menu'/>
              </Button>
            </Left>
            <Body>
              <Title>Home</Title>
            </Body>
            <Right>
              <Button transparent onPress={this._logOut.bind(this)}>
                <Icon name='log-out'/>
              </Button>
            </Right>
          </Header>
          <Content>
            <List>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={userImg}/>
                </Left>
                <Body>
                  <Text>ABCD WXYZ</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Button ref="abc" transparent onPress={this._onOption.bind(this)}>
                    <Icon style={{
                      color: 'lightgrey'
                    }} name='md-more'/>
                  </Button>
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={userImg}/>
                </Left>
                <Body>
                  <Text>WXYZ ABCD</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Button transparent onPress={this._onOption.bind(this)}>
                    <Icon style={{
                      color: 'lightgrey'
                    }} name='md-more'/>
                  </Button>
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={userImg}/>
                </Left>
                <Body>
                  <Text>EFGH IJKL</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Button transparent onPress={this._onOption.bind(this)}>
                    <Icon style={{
                      color: 'lightgrey'
                    }} name='md-more'/>
                  </Button>
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={userImg}/>
                </Left>
                <Body>
                  <Text>MNOP QRST</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Button transparent onPress={this._onOption.bind(this)}>
                    <Icon style={{
                      color: 'lightgrey'
                    }} name='md-more'/>
                  </Button>
                </Right>
              </ListItem>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={userImg}/>
                </Left>
                <Body>
                  <Text>UVWX YZAB</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Button transparent onPress={this._onOption.bind(this)}>
                    <Icon style={{
                      color: 'lightgrey'
                    }} name='md-more'/>
                  </Button>
                </Right>
              </ListItem>
            </List>
          </Content>
        </Container>
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  fontStyle: {
    fontWeight: 'bold'
  }
});

export default Home;
