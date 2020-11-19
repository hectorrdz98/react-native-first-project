import React from 'react';
import {
    View,
    TouchableWithoutFeedback
} from 'react-native';

import gs from '../../styles/General.style';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => (
    <View style={[gs.row, gs.justifyCenter, gs.justifyBetween, gs.p6]}>
        <TouchableWithoutFeedback onPress={() => props.toggle()}>
            <FontAwesomeIcon 
                icon={ faBars }
                style={gs.colorGray800}
                size={25}
            />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
            <FontAwesomeIcon 
                icon={ faBell }
                style={gs.colorGray400}
                size={25}
            />
        </TouchableWithoutFeedback>
    </View>
);

export default Header;