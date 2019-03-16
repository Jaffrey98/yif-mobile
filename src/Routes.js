import React, { Component } from 'react';
import {Actions, Router, Stack, Scene} from 'react-native-router-flux';


import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainApp from "./components/MainApp";

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} title="Home" hideNavBar/>
          <Scene key="login" component={Login} title="Login" hideNavBar/>
          <Scene key="register" component={Register} title="Register" hideNavBar/>
          <Scene key="mainApp" component={MainApp} title="MainApp" hideNavBar/>
        </Stack>
      </Router>
    );
  }
}