import * as React from 'react';
import { View, TouchableOpacity, Image, Dimensions, Keyboard, StatusBar  } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import { ResumeScreen, WalletScreen, AccountScreen, AddMoreScreen, PremiumScreen } from '..';
import Styles from '../Styles/TabMainStyle';
import addIcon from '../../icons/add.png';
import walletIcon from '../../icons/wallet.png';
import resumeIcon from '../../icons/resume.png';
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
      { key: 'Add', title: 'Add' },
      { key: 'Premium', title: 'Premium' },
      { key: 'Account', title: 'Conta' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    let color;
    return (
      <View style={Styles.TabStyle.tabBar}>
         <StatusBar backgroundColor="white" barStyle="light-content" />
        {props.navigationState.routes.map((route, i) => {
          {this.state.index === i ? color='#f5f8fa' : color = 'white' }
          return (
            <TouchableOpacity
              key={i}
              style={[Styles.TabStyle.tabItem, { backgroundColor: color }]}
              onPress={() => {this.setState({ index: i }); Keyboard.dismiss();} } >
              {route.title === 'Add' ? <Image
                style={{height: 72, width: 72}}
                source={icons[i]}
              /> : <Image
                  style={Styles.TabStyle.iconTab}
                  source={icons[i]}
                  resizeMode="cover"
                />}
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
