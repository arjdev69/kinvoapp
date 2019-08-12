import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class AddMore extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#707b81',fontSize: 35 }}> AddMore </Text>
            </View>
        )
    }
}
