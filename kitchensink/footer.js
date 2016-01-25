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

export class Footer extends Component {
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
                    Footer
                </Text>
                <Text>
                </Text>
            </View>

            <View style={ CSS.header.sub }>
                <Text style={ CSS.header.sub__h1 }>
                    Look down!
                </Text>
            </View>

            <View style={ CSS.footer.base }>
                <Text style={ CSS.footer.h1 }>
                    Footer
                </Text>
            </View>


        </View>);
    }
}
