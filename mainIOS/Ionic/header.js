'use strict';
import {
    variables as _,
    Utils
} from './base';

export const Header = {
    sub: {
        height: _.$headerHeight,
        borderColor: _.$seperator,
        borderBottomWidth: _.$seperatorWidth,
    },
    base: Utils.join( this.sub, {
        backgroundColor: _.$blackColor,
    }),
    h1: {
        color: _.$whiteColor,
        fontSize: _.$headerH1Size,

        textAlign: 'center',
        marginTop: 10,
        paddingBottom: 10,
    },
    sub__h1: {
        fontSize: _.$headerH1Size,

        textAlign: 'center',
        marginTop: 10,
    },
}
