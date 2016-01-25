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

export class Buttons extends Component {
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
                    Buttons
                </Text>
                <Text>
                </Text>
            </View>

            <Button>
                <Text>Hello, from Button Component!</Text>
            </Button>
            <ButtonGroup>
                <Button style={CSS.join('buttons', 'base', 'base__blue',)}>
                    <Text style={CSS.buttons.base__textWhite}>
                        Button Component!
                    </Text>
                </Button>
                <Button style={CSS.join('buttons', 'base',  'base__red')}
                    underlayColor={CSS.variables.$redColor}>
                    <Text style={CSS.buttons.base__textWhite}>
                        Button Component!
                    </Text>
                </Button>
            </ButtonGroup>

            <TouchableHighlight style={CSS.buttons.base} underlayColor={CSS.variables.$blueColor}>
                <Text style={CSS.buttons.base__text}>
                    Hello, Wrold!
                </Text>
            </TouchableHighlight>
            <View style={CSS.buttons.wrapper} underlayColor={CSS.variables.$blueColor}>
                <TouchableHighlight style={CSS.join('buttons', 'base', 'base__quarter')} underlayColor={CSS.variables.$blueColor}>
                    <Text style={CSS.buttons.base__text}>
                        Hello, Wrold!
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={CSS.join('buttons', 'base', 'base__quarter')} underlayColor={CSS.variables.$blueColor}>
                    <Text style={CSS.buttons.base__text}>
                        Hello, Wrold!
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={CSS.join('buttons', 'base', 'base__quarter')} underlayColor={CSS.variables.$blueColor}>
                    <Text style={CSS.buttons.base__text}>
                        Hello, Wrold!
                    </Text>
                </TouchableHighlight>
            </View>
            <View style={CSS.buttons.wrapper}>
                <TouchableHighlight
                    style={CSS.join('buttons', 'base', 'base__half')} underlayColor={CSS.variables.$blueColor}>
                    <Text style={CSS.buttons.base__text}>
                        Hello, Wrold!
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={CSS.join('buttons', 'base', 'base__blue', 'base__half')}>
                    <Text style={CSS.buttons.base__textWhite}>
                        Hello, Wrold!
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={CSS.join('buttons', 'base', 'base__lightBlue', 'base__half')}>
                    <Text style={CSS.buttons.base__textWhite}>
                        Hello, Wrold!
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={CSS.join('buttons', 'base', 'base__green', 'base__half')}>
                    <Text style={CSS.buttons.base__textWhite}>
                        Hello, Wrold!
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={CSS.join('buttons', 'base', 'base__yellow', 'base__half')}>
                    <Text style={CSS.buttons.base__textWhite}>
                        Hello, Wrold!
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={CSS.join('buttons', 'base', 'base__red', 'base__half')}>
                    <Text style={CSS.buttons.base__textWhite}>
                        Hello, Wrold!
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={CSS.join('buttons', 'base', 'base__purple', 'base__half')}>
                    <Text style={CSS.buttons.base__textWhite}>
                        Hello, Wrold!
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={CSS.join('buttons', 'base', 'base__dark', 'base__half')}>
                    <Text style={CSS.buttons.base__textWhite}>
                        Hello, Wrold!
                    </Text>
                </TouchableHighlight>
            </View>
        </View>);
    }
}
