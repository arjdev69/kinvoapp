import { StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');
height = height;
width = width;

const ListStyle = StyleSheet.create({
    list:{
        height: (height - (height*0.35))
    },
    container: {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomColor: '#f5f5f6',
        borderBottomWidth: 1
    },
    financialInstitutionName: {
        margin: 0,
        paddingLeft: 0,
        padding: 5,
    },
    institutionName:{
        color: '#008DCB',
        fontSize: 16
    },
    content:{
        flexDirection: 'column',
    },
    fieldProductName: {
        flexDirection: 'row',
        marginBottom: 5
    },
    productName:{
        fontSize: 18,
        padding: 5,
        color: '#788288',
    },
    divider: {
        width: 8,
        borderRadius: 20
    },
    fieldValuesCoin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    valuesCoin: {
        flexDirection: 'column',
        padding: 5
    },
    titleRevenue: {
        fontSize: 14,
        color: '#788288'
    },
    valueRevenue: {
        fontSize: 30,
        color: '#008DCB'
    }
});

export default { ListStyle };
