'use strict';
import {
    variables as _,
    Utils
} from './base';

import {
    Header
} from './header';

export const Footer = {
    base: Utils.join( Header.base, {
        backgroundColor: _.$greenColor,

        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
    }),
    h1: {
        color: _.$whiteColor,
        fontSize: _.$headerH1Size,

        textAlign: 'center',
        marginTop: 10,
        paddingBottom: 10,
    }
}
