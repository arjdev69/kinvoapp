import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Resume extends Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#707b81',fontSize: 35 }}>Resume!</Text>
        </View>
    );
  }
}
