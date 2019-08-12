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
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomColor: '#f5f5f6',
        borderBottomWidth: 1
    },
    financialInstitutionName: {
        margin: 0,
        paddingLeft: 0,
        padding: 8,
    },
    institutionName:{
        color: '#008DCB',
        fontSize: 14,
        fontFamily: 'SF Pro Display Regular',
        
    },
    content:{
        flexDirection: 'column',
    },
    fieldProductName: {
        flexDirection: 'row',
        marginBottom: 5,
        justifyContent: 'flex-start'
    },
    productName:{
        fontSize: 20,
        paddingLeft: 5,
        color: '#788288',
        fontFamily: 'SF Pro Display Regular',
    },
    divider: {
        width: 5,
        borderRadius: 30
    },
    fieldValuesCoin: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    valuesCoin: {
        flexDirection: 'column',
        padding: 0
    },
    titleRevenue: {
        fontSize: 12,
        color: '#788288',
        fontFamily: 'SF Pro Display Regular',        
    },
    valueRevenue: {
        fontSize: 30,
        color: '#008DCB',
        fontFamily: 'SF Pro Display Regular',
        top: -5
    }
});

export default { ListStyle };
