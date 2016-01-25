'use strict';
import React, {
  AppRegistry,
  Component,
  Text,
  View
} from 'react-native';

import {
    styles
} from './styles';

import {
    SignUp
} from './SignUp';

import {
    SignIn
} from './SignIn';

const components = {
    SIGN_IN: 0,
    SIGN_UP: 1,
};

export class Main extends Component {
    render() {
        var cType = this.props.data.component;
        var method;
        
        switch( cType ) {
            case components.SIGN_IN:
                method = 'renderSignIn';
                break;

            case components.SIGN_UP:
                method = 'renderSignUp';
                break;
        }
        return this[ method ]();
    }
    renderSignIn() {
        return (<SignIn {...this.props} />);
    }
    renderSignUp() {
        return (<SignUp {...this.props} />);
    }
};
