import React, { Component } from 'react';
import Main from './src/Main';
import { YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount',
  'Warning: componentWillReceiveProps'
])
export default class App extends Component {
  render() {
    return (
        <Main />
    );
  }
}
