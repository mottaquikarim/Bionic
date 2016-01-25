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
var icons = [
"asterisk",
"at",
"automobile",
"balance-scale",
"ban",
"bank",
"bar-chart",
"bar-chart-o",
"barcode",
"bars",
"battery-0",
"battery-1",
"battery-2",
"battery-3",
"battery-4",
"battery-empty",
"battery-full",
"battery-half",
"battery-quarter",
"battery-three-quarters",
"bed",
"beer",
"bell",
"bell-o",
"bell-slash",
"bell-slash-o",
"bicycle",
"binoculars",
"birthday-cake",
"bluetooth",
"bluetooth-b",
"bolt",
"bomb",
"book",
"bookmark",
"bookmark-o",
"briefcase",
"bug",
"building",
];

export class Icons extends Component {
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
                    Icons
                </Text>
                <Text>
                </Text>
            </View>

            <ButtonGroup>
                <Button style={CSS.join('buttons', 'base',)}>
                    <Text style={CSS.buttons.base__text}>
                        <Icon
                            name="chevron-right"
                            size={CSS.variables.$headerH1Size}
                            color={CSS.variables.$blackColor}
                         />
                    </Text>
                </Button>
                {icons.map((icon, idx) => {
                    return (<Button style={CSS.join('buttons', 'base',)} key={idx}>
                        <Text style={CSS.buttons.base__text}>
                            <Icon
                                name={icon}
                                size={CSS.variables.$headerH1Size}
                                color={CSS.variables.$blackColor}
                             />
                        </Text>
                    </Button>);
                })}
            </ButtonGroup>

        </View>);
    }
}
