import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Styles from '../Styles/ListStyle';
import { colors } from '../../config/Color';

export default class ListItem extends Component {
    render() {
        return (
            <View style={Styles.ListStyle.container}>
                <View style={Styles.ListStyle.financialInstitutionName}>
                    <Text style={[Styles.ListStyle.institutionName, {color:colors[this.props.item.productTypeId]}]}>
                       {this.props.item.financialInstitutionName}
                    </Text>
                </View>
                <View style={Styles.ListStyle.content}>
                    <View style={Styles.ListStyle.fieldProductName}>
                        <View style={[{backgroundColor:colors[this.props.item.productTypeId]}, Styles.ListStyle.divider]} />
                        <Text style={Styles.ListStyle.productName}>
                            {this.props.item.productName}
                        </Text>
                    </View>
                    <View style={Styles.ListStyle.fieldValuesCoin}>
                        <View style={Styles.ListStyle.valuesCoin}>
                            <Text style={Styles.ListStyle.titleRevenue}>SALDO ATUAL</Text>
                            <Text style={[Styles.ListStyle.valueRevenue,{color:colors[this.props.item.productTypeId]}]}>R${this.props.item.equity.toFixed(2).replace('.', ',')}</Text>
                        </View>
                        <View style={Styles.ListStyle.valuesCoin}>
                            <Text style={[Styles.ListStyle.titleRevenue]}>RENTABILIDADE</Text>
                            <Text style={[Styles.ListStyle.valueRevenue, {color:colors[this.props.item.productTypeId]}]}>
                                {this.props.item.profitability.toFixed(2).replace('.', ',')}%
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
