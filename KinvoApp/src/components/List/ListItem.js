import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Styles from '../Styles/ListStyle';
import { colors } from '../../config/Color';

export default class ListItem extends Component {

    formatMoney(n, c, d, t) {
        c = isNaN(c = Math.abs(c)) ? 2 : c, d = d == undefined ? "," : d, t = t == undefined ? "." : t, s = n < 0 ? "-" : "", i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    }

    render() {
        return (
            <View style={Styles.ListStyle.container}>
                <View style={Styles.ListStyle.financialInstitutionName}>
                    <Text style={[Styles.ListStyle.institutionName, { color: colors[this.props.item.productTypeId] }]}>
                        {this.props.item.financialInstitutionName}
                    </Text>
                </View>
                <View style={Styles.ListStyle.content}>
                    <View style={Styles.ListStyle.fieldProductName}>
                        <View style={[{ backgroundColor: colors[this.props.item.productTypeId] }, Styles.ListStyle.divider]} />
                        <Text style={Styles.ListStyle.productName}>
                            {this.props.item.productName}
                        </Text>
                    </View>
                    <View style={Styles.ListStyle.fieldValuesCoin}>
                        <View style={Styles.ListStyle.valuesCoin}>
                            <Text style={Styles.ListStyle.titleRevenue}>SALDO ATUAL</Text>
                            <Text style={[Styles.ListStyle.valueRevenue, { color: colors[this.props.item.productTypeId] }]}>
                                R${this.formatMoney(this.props.item.equity)}
                            </Text>
                        </View>
                        <View style={Styles.ListStyle.valuesCoin}>
                            <Text style={[Styles.ListStyle.titleRevenue]}>RENTABILIDADE</Text>
                            <Text style={[Styles.ListStyle.valueRevenue, { color: colors[this.props.item.productTypeId] }]}>
                                {this.props.item.profitability.toFixed(2).replace('.', ',')}%
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
