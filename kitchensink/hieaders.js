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

export class Headers extends Component {
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
                    Buttons
                </Text>
                <Text>
                </Text>
            </View>
        </View>);
    }
}
