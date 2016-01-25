'use strict';
import {
    variables as _,
    Utils
} from './base';

var sub = {
    height: _.$headerHeight,
    borderColor: _.$seperator,
    borderBottomWidth: _.$seperatorWidth,
};

var h1 = {
    color: _.$whiteColor,
    fontSize: _.$headerH1Size,

    textAlign: 'center',
    marginTop: 10,
    paddingBottom: 10,
};

var flex = {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
};

export const Header = {
    sub: sub,
    h1: h1,
    base: Utils.join( sub, flex, {
        backgroundColor: _.$blackColor,
    }),
    base__white: Utils.join( sub, flex, {
        backgroundColor: _.$whitekColor,
    }),
    base__red: Utils.join( sub, {
        backgroundColor: _.$redColor,
    }),
    base__blue: Utils.join( sub, {
        backgroundColor: _.$blueColor,
    }),
    base__green: Utils.join( sub, {
        backgroundColor: _.$greenColor,
    }),
    h1__black: Utils.join( h1, {
        color: _.$blackColor,
    }),
    sub__h1: {
        fontSize: _.$headerH1Size,

        textAlign: 'center',
        marginTop: 10,
    },
    icon__left: {
        textAlign: 'left',
        marginTop: 13,
        marginLeft: 8,
    },
    icon__right: {
        textAlign: 'right',
        marginTop: 13,
        marginRight: 8,
    },
    icon__flexleft: {
        alignSelf: 'flex-start',
        flex: 1,
    },
    flex2: {
        flex: 2,
    },
    icon__flexright: {
        alignSelf: 'flex-start',
        flex: 1,
    },
}
