import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import axios from 'axios'

import { ListItem } from '../';
import api from '../../services/api';
import Styles from '../Styles/ListStyle';
import { connect } from 'react-redux';

import { searchObject } from '../Redux/Actions/AuthActions';


class List extends Component {
    
    state={
        data: [],
        first: 0,
        last: 9999,
        query: ''
    }

    filter(key, type){
        const search = this.state.data.filter(function (dt) {
            if(type === "product"){
                text = dt.productName.toLocaleUpperCase();
            }else{
                text = dt.financialInstitutionName.toLocaleUpperCase();
            }
            key = key.toLocaleUpperCase();
            var re = new RegExp(key + ".*")
            return text.match(re);
        });

        return search;
    }

    filterDataBySearch(key){
        let search = this.filter(key, "product")
        if(search == ''){
            search = this.filter(key, "institute")
        }
        first = this.state.data.indexOf(search[0]);
        last = this.state.data.indexOf(search[search.length - 1]) + 1;
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.searchKey) {
            this.filterDataBySearch(nextProps.searchKey)
        }else{
            first = 0;
            last = 9999;
        }
        this.setState({first, last})
    }

    async componentDidMount() {
        const response = await api.get('/getProducts');
        const { data } = response.data;
        this.setState({data});
    }

    render() {
        return (
            <View style={Styles.ListStyle.list}>
                <ScrollView>
                    {this.state.data.slice(this.state.first, this.state.last).map((item, i)=>(
                        <ListItem key={i} item={item}/>
                    ))}
                </ScrollView>
            </View>
        )
    }
}


const mapStateToProps = state => (
    {
        searchKey: state.AuthReducers.searchKey,
    }
)

export default connect(mapStateToProps, { searchObject })(List);