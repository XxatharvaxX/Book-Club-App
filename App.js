import React, { Component } from "react";
import LoginScreen from "./screens/Login";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import { AppTabNavigator } from "./components/AppTabNavigator";

export default class App extends Component {
  render() {
    return <AppContainer/>;
  }
}

const switchNavigator = createSwitchNavigator({
  Login:{screen:LoginScreen},
  Drawer:{screen:AppTabNavigator}
});

const AppContainer = createAppContainer(switchNavigator);
