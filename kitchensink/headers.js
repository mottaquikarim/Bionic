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

var Icon = require('react-native-vector-icons/FontAwesome');

export class Headers extends Component {
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
                    Headers
                </Text>
                <Text>
                </Text>
            </View>

            <View style={CSS.header.base__white}></View> 

            <View style={ CSS.header.base__white }>
                <Text style={CSS.join('header', 'icon__left', 'icon__flexleft')}>
                    <Icon
                        name="bars"
                        size={CSS.variables.$headerH1Size}
                        color={CSS.variables.$blackColor}
                     />
                </Text>
                <Text style={ CSS.header.h1__black }>
                    Header
                </Text>
                <Text style={CSS.join('header', 'icon__right', 'icon__flexright')}>
                    <Icon
                        name="pencil-square-o"
                        size={CSS.variables.$headerH1Size}
                        color={CSS.variables.$blackColor}
                     />
                </Text>
            </View>

            <View style={CSS.header.base__white}></View> 

            <View style={ CSS.header.base__white }>
                <Text style={ CSS.header.h1__black }>
                    Header
                </Text>
            </View>
            <View style={ CSS.header.sub }>
                <Text style={ CSS.header.sub__h1 }>
                    Sub header
                </Text>
            </View>

            <View style={CSS.header.base__white}></View> 

            <View style={ CSS.header.base__green }>
                <Text style={ CSS.header.h1 }>
                    Header
                </Text>
            </View>
            <View style={ CSS.header.base__blue }>
                <Text style={ CSS.header.h1 }>
                    Header
                </Text>
            </View>
            <View style={ CSS.header.base__red }>
                <Text style={ CSS.header.h1 }>
                    Header
                </Text>
            </View>
        </View>);
    }
}
