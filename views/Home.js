import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import { 
    StyleSheet, 
    Text, 
    View,
    Animated
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Header from './components/Header';
import Menu from './components/Menu';
import gs from '../styles/General.style';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    updateMenu(isOpen) {
        this.setState({isOpen})
    }
    render() {
        return (
            <View style={[gs.fullWidthHeight, gs.bgWhite]}>
                <SideMenu
                    menu={<Menu />}
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                    animationFunction={(prop, value) =>
                        Animated.spring(prop, {
                            toValue: value,
                            friction: 8,
                            useNativeDriver: true,
                        })
                    }
                >
                    <Header 
                        toggle={this.toggle.bind(this)}
                    />
                    <View style={gs.p6}>
                        <Text style={[styles.basicText, gs.colorGray600, gs.fontRegular]}>
                            Hello,
                        </Text>
                        <Text style={[styles.basicText, gs.colorGray800, gs.fontBold]}>
                            Héctor Rodríguez
                        </Text>
                    </View>
                    <StatusBar style="auto" />
                </SideMenu>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    basicText: {
        fontSize: 25,
        fontFamily: 'RobotoRegular',
        borderRadius: 5
    }
  });
  