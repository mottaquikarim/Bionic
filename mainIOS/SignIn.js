'use strict';
import React, {
  AppRegistry,
  Component,
  TextInput,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

/*
import {
    styles,
    colors,
    StyleOps
} from './Ionic/index';
*/

import {
    CSS
} from './Ionic/index';

import {
    SignUp
} from './SignUp';

export class SignIn extends Component {
    login() {
        this.props.navigator.push({
            component: SignUp,
            props: this.props,
        });
    }
    render() {
        return (<View style={CSS.container.wrapper }>
            <View style={ CSS.header.base }>
                <Text style={ CSS.header.h1 }>
                    Header
                </Text>
            </View>
            <View style={ CSS.header.sub }>
                <Text style={ CSS.header.sub__h1 }>
                    Sub header
                </Text>
            </View>
            <View style={ CSS.footer.base }>
                <Text style={ CSS.footer.h1 }>
                    Footer
                </Text>
            </View>

            <TouchableHighlight style={CSS.buttons.base}>
                <Text style={CSS.buttons.base__text}>
                    Hello, Wrold!
                </Text>
            </TouchableHighlight>
            <View style={CSS.buttons.wrapper}>
                <TouchableHighlight style={CSS.join('buttons', 'base', 'base__quarter')}>
                    <Text style={CSS.buttons.base__text}>
                        Hello, Wrold!
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={CSS.join('buttons', 'base', 'base__quarter')}>
                    <Text style={CSS.buttons.base__text}>
                        Hello, Wrold!
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={CSS.join('buttons', 'base', 'base__quarter')}>
                    <Text style={CSS.buttons.base__text}>
                        Hello, Wrold!
                    </Text>
                </TouchableHighlight>
            </View>
            <View style={CSS.buttons.wrapper}>
                <TouchableHighlight
                    style={CSS.join('buttons', 'base', 'base__half')}>
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
            <View style={CSS.list.headerBase}>
                <Text style={CSS.list.base__header}>
                    Hello
                </Text>
            </View>
            <View style={CSS.list.base}>
                <Text style={CSS.list.base__text}>
                    Hello
                </Text>
            </View>
        </View>);
    }
}

