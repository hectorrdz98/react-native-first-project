import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import { 
    StyleSheet, 
    Text, 
    View 
} from 'react-native';
import GeneralStyles from '../styles/General.style';

export default class Home extends Component {
    render() {
        return (
            <View style={GeneralStyles.fullWidthHeight}>
                
                <View style={styles.container}>
                    <Text style={styles.basicText}>Hey there! This is my app</Text>
                    <StatusBar style="auto" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    basicText: {
        fontSize: 20,
        fontWeight: '900',
        color: '#fff',
        backgroundColor: '#6b46c1',
        fontFamily: 'RobotoRegular',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5
    }
  });
  