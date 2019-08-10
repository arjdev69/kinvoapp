import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Styles from '../Styles/ListStyle';

export default class ListItem extends Component {
    render() {
        return (
            <View style={Styles.ListStyle.container}>
                <View style={Styles.ListStyle.financialInstitutionName}>
                    <Text style={[Styles.ListStyle.institutionName, {color:'pink'}]}>RICO</Text>
                </View>
                <View style={Styles.ListStyle.content}>
                    <View style={Styles.ListStyle.fieldProductName}>
                        <View style={[Styles.ListStyle.divider, {backgroundColor:'pink'}]} />
                        <Text style={Styles.ListStyle.productName}>
                            AZ QUEST LEGAN LOW VOL FUNDO DE INVESTIMENTO MULTIMERCADO
                        </Text>
                    </View>
                    <View style={Styles.ListStyle.fieldValuesCoin}>
                        <View style={Styles.ListStyle.valuesCoin}>
                            <Text style={Styles.ListStyle.titleRevenue}>SALDO ATUAL</Text>
                            <Text style={[Styles.ListStyle.valueRevenue,{color:'pink'}]}>R$ 2157.35</Text>
                        </View>
                        <View style={Styles.ListStyle.valuesCoin}>
                            <Text style={[Styles.ListStyle.titleRevenue]}>RENTABILIDADE</Text>
                            <Text style={[Styles.ListStyle.valueRevenue, {color:'pink'}]}>3.47 %</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
