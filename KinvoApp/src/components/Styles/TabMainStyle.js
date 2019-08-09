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

export default { TabStyle };
