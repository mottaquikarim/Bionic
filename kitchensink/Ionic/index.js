'use strict';
import React, {
  StyleSheet
} from 'react-native';

import {
    Container
} from './container';

import {
    Header    
} from './header';

import {
    Footer
} from './footer';

import {
   Buttons 
} from './buttons';

import {
    List
} from './lists';

import {
    variables
} from './base';

export const CSS = {
    container: Container,
    header: Header,
    footer: Footer,
    buttons: Buttons,
    list: List,
    variables: variables,
    join() {
        var args = [].slice.call( arguments )

        var baseLine = args.shift();

        return args.reduce((styles, arg) => {
            var objToAdd;

            if ( typeof arg === 'string' ) {
                objToAdd = this[ baseLine ][ arg ];
            }
            else {
                objToAdd = arg;
            }

            Object.assign(
                styles,
                objToAdd,
            );

            return styles;
        }, {});
    }
};

