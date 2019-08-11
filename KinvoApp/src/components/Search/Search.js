import React, { Component } from 'react';
import { View, TextInput, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { connect } from 'react-redux';

import { searchObject } from '../Redux/Actions/AuthActions';
import Styles from '../Styles/SearchStyle';
import searchIcon from '../../icons/search.png';

class Search extends Component {
    render() {
        return (
            <View style={Styles.SearchStyle.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={Styles.SearchStyle.searchSection}>
                        <Image style={[Styles.SearchStyle.searchIcon, { height: 18, width: 18 }]} source={searchIcon} />
                        <TextInput
                            value={this.props.searchKey}
                            onChangeText={searchKey => this.props.searchObject(searchKey)}
                            style={Styles.SearchStyle.input}
                            placeholder=" "
                            underlineColorAndroid="transparent"
                            keyboardType="email-address"
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const mapStateToProps = state => (
    {
        searchKey: state.AuthReducers.searchKey,
    }
)

export default connect(mapStateToProps, { searchObject })(Search);