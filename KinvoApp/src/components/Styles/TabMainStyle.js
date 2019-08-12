import { StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');
height = height;
width = width;

const TabStyle = StyleSheet.create({
    container: {
        flex: 1,
      },
      tabBar: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#f5f5f6'
      },
      iconTab: {
        width: 68,
        height: 68
      },
      tabItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
      },
});

export default { TabStyle };
