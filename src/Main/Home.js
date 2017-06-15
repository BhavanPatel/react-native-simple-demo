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
import SideNavBar from './SideMenu';
const userImg = require('../assets/user.png');

import ActionSheet from 'react-native-actionsheet';
const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 3;
const options = ['Cancel', 'Option 1', 'Option 2', 'Show Detail'];
const title = 'Select One';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
    this.showActionSheet = this.showActionSheet.bind(this);
  }

  showActionSheet() {
    this.ActionSheet.show();
  }

  handlePress(i) {
    console.log(i);
    if (i === 3) {
      Actions.Detail();
    }
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
                  <Button transparent onPress={this.showActionSheet}>
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
                  <Button transparent onPress={this.showActionSheet}>
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
                  <Button transparent onPress={this.showActionSheet}>
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
                  <Button transparent onPress={this.showActionSheet}>
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
                  <Button transparent onPress={this.showActionSheet}>
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
                  <Text>ABCD WXYZ</Text>
                  <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                  <Button transparent onPress={this.showActionSheet}>
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
                  <Button transparent onPress={this.showActionSheet}>
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
                  <Button transparent onPress={this.showActionSheet}>
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
                  <Button transparent onPress={this.showActionSheet}>
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
                  <Button transparent onPress={this.showActionSheet}>
                    <Icon style={{
                      color: 'lightgrey'
                    }} name='md-more'/>
                  </Button>
                </Right>
              </ListItem>
            </List>
          </Content>
          <ActionSheet ref={o => this.ActionSheet = o} title={title} options={options} cancelButtonIndex={CANCEL_INDEX} onPress={this.handlePress}/>
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
