import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { SearchView, List } from '../';

export default class Product extends Component {
    render() {
        return (
            <View>
               <SearchView />
               <List />
            </View>
        )
    }
}
