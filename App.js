import React from 'react';
import AppNavigator from './navigations/Navigator'
import * as Font from 'expo-font';
import {AppLoading} from 'expo'

export default class App extends React.Component{
    state = {
        isFontLoaded : false
    }
    async componentDidMount(){
        await Font.loadAsync({
            'RobotoBold' : require('./assets/fonts/Roboto-Bold.ttf'),
            'RobotoRegular' : require('./assets/fonts/Roboto-Regular.ttf'),
        });
        this.setState({isFontLoaded:true})
    }
    render(){
        return(
            (this.state.isFontLoaded === true) ? (<AppNavigator/>) : (<AppLoading/>)
        );
    }
}