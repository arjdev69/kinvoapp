import * as React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';

import { ResumeScreen, WalletScreen, AccountScreen, AddMoreScreen, PremiumScreen } from '../';

import addIcon from '../../icons/add.png';
import walletIcon from '../../icons/wallet.png';
import resumeIcon from '../../icons/resume.png';
import searchIcon from '../../icons/search.png';
import premiumIcon from '../../icons/premium.png';
import accountIcon from '../../icons/account.png';

const icons = [
  resumeIcon, walletIcon, addIcon, 
  premiumIcon, accountIcon
];

export default class TabMain extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'Resume', title: 'Resumo' },
      { key: 'Wallet', title: 'Carteira' },
      { key: 'Add', title: '' },
      { key: 'Premium', title: 'Premium' },
      { key: 'Account', title: 'Conta' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Image
                style={styles.iconTab}
                source={icons[i]}
              />
              <Animated.Text>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    Resume: ResumeScreen,
    Wallet: WalletScreen,
    Add: AddMoreScreen,
    Premium: PremiumScreen,
    Account: AccountScreen
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        initialLayout={{ width: Dimensions.get('window').width }}
        tabBarPosition={'bottom'}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
  },
  iconTab: {
    margin: 2,
    width: 32,
    justifyContent: 'center',
    height: 32,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});
