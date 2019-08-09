import React, { Component } from 'react';
import { View, TextInput, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Styles from '../Styles/SearchStyle';
import searchIcon from '../../icons/search.png';

export default class Search extends Component {
    render() {
        return (
            <View style={Styles.SearchStyle.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={Styles.SearchStyle.searchSection}>
                        <Image style={[Styles.SearchStyle.searchIcon, { height: 18, width: 18 }]} source={searchIcon} />
                        <TextInput
                            style={Styles.SearchStyle.input}
                            placeholder=" "
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
