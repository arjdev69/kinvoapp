import { StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');
height = height;
width = width;

const WalletStyle = StyleSheet.create({
    container: {
        flex: 1,
      },
      tabBar: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#ffffff',
        alignItems: 'center'
      },
      iconTab: {
        margin: 2,
        width: 50,
        height: 50,
      },
      iconViewTab:{
        margin: 0,
        padding: 10
      },
      tabItem: {
        flex: 1,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12
      },
      tabItemTitle:{
        color: '#707b81',
        fontSize: 20,
        fontFamily: 'SF Pro Display Regular',
      },
      scene: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
});

export default { WalletStyle };
