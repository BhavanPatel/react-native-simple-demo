import React, {Component} from 'react';
import {Image, View, StyleSheet, Dimensions} from 'react-native';
import {
  Text,
  Button,
  Label,
  Item,
  Form,
  Input,
  Container,
  Content
} from 'native-base';
import {Actions} from 'react-native-router-flux';
const logoImg = require('../assets/logo.png');

class Login extends Component {

  _login() {
    Actions.Home();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logoImg}/>
        <View>
          <Form>
            <Item floatingLabel>
              <Label >Email</Label>
              <Input keyboardType='email-address' autoCapitalize='none'/>
            </Item>
            <Item floatingLabel>
              <Label >Password</Label>
              <Input secureTextEntry={true}/>
            </Item>
          </Form>
        </View>
        <View style={styles.loginButton}>
          <Button block primary onPress={this._login.bind(this)}>
            <Text >Login</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: Dimensions.get('window').width - 25,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain'
  },
  container: {
    padding: 10,
    paddingTop: 50
  },
  loginButton: {
    paddingTop: 30
  }
});

export default Login;
