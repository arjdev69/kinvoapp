import React, { Component } from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import { View, TouchableOpacity, Image, Dimensions,Text, Keyboard } from 'react-native';
import Animated from 'react-native-reanimated';

import { ProductScreen } from '../';
import backIcon from '../../icons/back.png';
import Styles from '../Styles/WalletStyle';

const ExtractScreen = () => (
  <View style={[Styles.WalletStyle.scene, { backgroundColor: '#7b858b' }]}><Text>Extrato</Text></View>
);

const WalletScreen = () => (
  <View style={[Styles.WalletStyle.scene, { backgroundColor: '#7b858b' }]}><Text>Carteira</Text></View>
);
export default class Wallet extends Component {

  state = {
    index: 0,
    routes: [
      { key: 'Wallet', title: 'Carteira' },
      { key: 'Product', title: 'Produto' },
      { key: 'Extract', title: 'Extrato' }
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    let color;
    return (
      <View style={Styles.WalletStyle.tabBar}>
        <View style={Styles.WalletStyle.iconViewTab} >
          <Image
            style={Styles.WalletStyle.iconTab}
            source={backIcon}
          />
        </View>
        {props.navigationState.routes.map((route, i) => {
          
          {this.state.index === i ? color='#f5f8fa' : color = 'white' }
          return (
            <TouchableOpacity
              key={i}
              style={[Styles.WalletStyle.tabItem, { backgroundColor: color }]}
              onPress={() => {this.setState({ index: i }); Keyboard.dismiss();}}>
              <Animated.Text style={Styles.WalletStyle.tabItemTitle}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    Product: ProductScreen,
    Wallet: WalletScreen,
    Extract: ExtractScreen
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}
