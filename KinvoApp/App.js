import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";
import TabBar from './src/components/TapBarBottom/TabBar';

import { ResumeScreen, WalletScreen, AccountScreen, AddMoreScreen, PremiumScreen } from './src/components';

const TabNavigator = createMaterialTopTabNavigator(
    {
        Resume: {
            screen: ResumeScreen,
        },
        Wallet: {
            screen: WalletScreen
        },
        Add: {
            screen: AddMoreScreen
        },
        Premium: {
            screen: PremiumScreen
        },
        Account: {
            screen: AccountScreen
        },
    },
    {
        tabBarComponent: TabBar,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
    })

export default createAppContainer(TabNavigator)