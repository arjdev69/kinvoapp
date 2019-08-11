import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import Reducers from './components/Redux/Reducers';
import TabMain from './components/TabBar/TabMain';

export default class Main extends Component {
    render() {
        return (
            <Provider store={createStore(Reducers)}>
                <TabMain />
            </Provider>
        )
    }
}
