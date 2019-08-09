import { StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');
height = height;
width = width;

const SearchStyle = StyleSheet.create({
    container: {
        height: (height - (height*0.85)),
        backgroundColor: '#f5f8fa',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: (width - (width*0.1)),
        borderRadius: 30,
        paddingLeft: 10

    },
    searchIcon: {
        padding: 10,

    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30
    },
});

export default { SearchStyle };
