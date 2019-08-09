import React, { Component } from 'react';

import { View, Text } from 'react-native';

// import { Container } from './styles';

export default class Account extends Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Account!</Text>
        </View>
    );
  }
}
