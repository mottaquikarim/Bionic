'use strict';

import {
    variables as _,
    Utils
} from './base';

export const List = {
    base: {
        paddingLeft: _.$listPadLeft,
        paddingRight: _.$listPadRight,
        paddingTop: _.$listPadTop,
        paddingBottom: _.$listPadBottom,

        borderTopWidth: _.$seperatorWidth,
        borderBottomWidth: _.$seperatorWidth,
        borderColor: _.$seperator,
    },
    headerBase: Utils.join( this.base, {
        backgroundColor: _.$lightColor,
    }),
    base__text: {
        fontSize: 15,
        color: _.$blackColor,
        textAlign: 'center',
    },
    base__header: Utils.join( this.base__text, {
        textAlign: 'left',
    }),
}
