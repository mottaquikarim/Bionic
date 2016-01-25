'use strict';
import React, {
  AppRegistry,
  Component,
  TextInput,
  TouchableHighlight,
  Text,
  View
} from 'react-native';

import {
    styles,
    colors
} from './styles';

export class SignUp extends Component {
    login() {

    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Repeate Password"
                />
                <TouchableHighlight
                    underlayColor={colors.blueColor}>
                    <Text onPress={this.login.bind(this)}>
                        Sign Up
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}
