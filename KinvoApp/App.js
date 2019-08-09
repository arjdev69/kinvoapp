import React, { Component } from 'react';
import TabMain from './src/components/TapBarBottom/TabMain';
import { YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount'
])
export default class App extends Component {
  render() {
    return (
        <TabMain />
    );
  }
}
