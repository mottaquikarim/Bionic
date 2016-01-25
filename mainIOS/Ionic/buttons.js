'use strict';

import {
    variables as _,
    Utils
} from './base';

import Dimensions from 'Dimensions';

export const Buttons = {
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    base: {
        padding: _.$buttonPad,
        margin: _.$buttonMarg,

        borderColor: _.$seperator,
        borderWidth: _.$seperatorWidth,
        borderRadius: _.$buttonRadius,

        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    base__text: {
        color: _.$blackColor,
        textAlign: 'center',
    },
    base__textWhite: {
        color: _.$whiteColor,
    },
    base__half: {
        width: Dimensions.get('window').width/3,
    },
    base__quarter: {
        width: Dimensions.get('window').width/4,
    },
    base__blue: {
        backgroundColor: _.$blueColor,
        borderColor: _.$blueColor,
    },
    base__lightBlue: {
        backgroundColor: _.$lightBlueColor,
        borderColor: _.$lightBlueColor,
    },
    base__green: {
        backgroundColor: _.$greenColor,
        borderColor: _.$greenColor,
    },
    base__yellow: {
        backgroundColor: _.$yellowColor,
        borderColor: _.$yellowColor,
    },
    base__red: {
        backgroundColor: _.$redColor,
        borderColor: _.$redColor,
    },
    base__purple: {
        backgroundColor: _.$purpleColor,
        borderColor: _.$purpleColor,
    },
    base__dark: {
        backgroundColor: _.$darkColor,
        borderColor: _.$darkColor,
    },
};

