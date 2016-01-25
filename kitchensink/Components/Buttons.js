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
} from '../Ionic/index';

export class ButtonGroup extends Component {
    render() {
        return (<View style={CSS.buttons.wrapper}>
            {this.props.children}
        </View>);
    }
}

export class Button extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            defaultTouchProps: {
                style: CSS.buttons.base,
                underlayColor: CSS.variables.$blueColor,
            },
            defaultTextProps: {
                style: CSS.buttons.base__text
            },
            text: 'Hello, Wrold!',
        };
    }
    _getChildren( children ) {
        var NodeObj = children;
        var isArray = Array.isArray( children );

        if ( isArray ) {
            NodeObj = children[ 0 ];
        }

        return {
            Node: NodeObj.type,
            content: NodeObj.props.children,
            NodeProps: NodeObj.props,
        };
    }
    render() {
        var {
            Node,
            content,
            NodeProps,
        } = this._getChildren( this.props.children );

        return (<TouchableHighlight
            {...this.state.defaultTouchProps}
            {...this.props}>
                <Node {...this.defaultTextProps} {...NodeProps}>
                    {content}
                </Node>
        </TouchableHighlight>);
    }
}
