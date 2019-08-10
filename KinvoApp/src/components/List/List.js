import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import axios from 'axios'
import { ListItem } from '../';
import api from '../../services/api';

export default class List extends Component {
    
    state={
        data: ['']
    }

    async componentDidMount() {
        const response = await api.get('/getProducts');
        const { data } = response.data;
        this.setState({data});
    }

    render() {
        return (
            <View>
                <ScrollView>
                    {this.state.data.map((item, i)=>(
                        <ListItem key={i}/>
                    ))}
                </ScrollView>
            </View>
        )
    }
}
