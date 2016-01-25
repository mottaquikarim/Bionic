'use strict';
import React, {
  AppRegistry,
  Component,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

import {
    CSS
} from './Ionic/index';

import {
    Button,
    ButtonGroup,
} from './Components/Buttons';
var Icon = require('react-native-vector-icons/FontAwesome');

export class Lists extends Component {
    _goBack() {
        this.props.navigator.pop();
    }
    render() {
        return (<View style={CSS.container.wrapper }>
            <View style={ CSS.header.base }>
                <Text style={CSS.header.icon__left}
                    onPress={this._goBack.bind(this)}>
                    <Icon
                        name="chevron-left"
                        size={CSS.variables.$headerH1Size}
                        color={CSS.variables.$whiteColor}
                     />
                </Text>
                <Text style={ CSS.header.h1 }>
                    Lists
                </Text>
                <Text>
                </Text>
            </View>

            <View style={ CSS.header.base__white }>
                <Text style={CSS.join('header', 'icon__left', 'icon__flexleft', {
                    flex: 0,
                })}>
                    <Icon
                        name="anchor"
                        size={CSS.variables.$headerH1Size}
                        color={CSS.variables.$blackColor}
                     />
                </Text>
                <Text style={ CSS.join('header', 'h1__black', {
                    textAlign: 'left', 
                    flex:2,
                    marginLeft: 20,
                })}>
                    List Item
                </Text>
                <Text style={CSS.join('header', 'icon__right', 'icon__flexright')}>
                </Text>
            </View>

            <View style={ CSS.header.base__white }>
                <Text style={CSS.join('header', 'icon__left', 'icon__flexleft', {
                    flex: 0,
                })}>
                    <Icon
                        name="anchor"
                        size={CSS.variables.$headerH1Size}
                        color={CSS.variables.$blackColor}
                     />
                </Text>
                <Text style={ CSS.join('header', 'h1__black', {
                    textAlign: 'left', 
                    flex:2,
                    marginLeft: 20,
                })}>
                    List Item
                </Text>
                <Text style={CSS.join('header', 'icon__right', 'icon__flexright')}>
                </Text>
            </View>

        </View>);
    }
}
