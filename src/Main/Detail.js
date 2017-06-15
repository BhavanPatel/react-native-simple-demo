import React, {Component} from 'react';
import {View, Dimensions, StyleSheet, Image} from 'react-native';
import {
  Text,
  Button,
  Label,
  Container,
  Header,
  Left,
  Card,
  Icon,
  Right,
  Title,
  Content,
  CardItem,
  Thumbnail,
  Body
} from 'native-base';
import {Actions} from 'react-native-router-flux';
const logoImg = require('../assets/logo.png');

class Detail extends Component {
  _goBack() {
    Actions.pop();
  }

  render() {
    return (
      <Container>
        <Header backgroundColor='#039BE5'>
          <Left>
            <Button transparent onPress={this._goBack.bind(this)}>
              <Icon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
            <Title>Detail</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={logoImg}/>
                <Body>
                  <Text>React Native</Text>
                  <Text note>xxxxxx</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image style={styles.logo} source={logoImg}/>
            </CardItem>
            <CardItem>
              <Button transparent primary>
                <Icon active name="thumbs-up"/>
                <Text>12 Likes</Text>
              </Button>
              <Button transparent primary>
                <Icon active name="chatbubbles"/>
                <Text>4 Comments</Text>
              </Button>
              <Text>11h ago</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={logoImg}/>
                <Body>
                  <Text>Mobile Application</Text>
                  <Text note>xxxxxx</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image style={styles.logo} source={logoImg}/>
            </CardItem>
            <CardItem>
              <Button transparent primary>
                <Icon active name="thumbs-up"/>
                <Text>100 Likes</Text>
              </Button>
              <Button transparent primary>
                <Icon active name="chatbubbles"/>
                <Text>1 Comments</Text>
              </Button>
              <Text>17h ago</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={logoImg}/>
                <Body>
                  <Text>Hybrid Application</Text>
                  <Text note>xxxxxx</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image style={styles.logo} source={logoImg}/>
            </CardItem>
            <CardItem>
              <Button transparent primary>
                <Icon active name="thumbs-up"/>
                <Text>120 Likes</Text>
              </Button>
              <Button transparent primary>
                <Icon active name="chatbubbles"/>
                <Text>34 Comments</Text>
              </Button>
              <Text>1h ago</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: Dimensions.get('window').width - 25,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain'
  }
});

export default Detail;
