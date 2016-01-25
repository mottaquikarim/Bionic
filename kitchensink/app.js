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
} from './Ionic/index';

import {
    Buttons
} from './buttons';

import {
    Headers
} from './headers';

import {
    Footer
} from './footer';

import {
    Icons
} from './icons';

import {
    Lists
} from './lists';
export class Main extends Component {
    goTo( comp ) {
        this.props.navigator.push({
            type: 'right',
            component: comp 
        });
    }
    render() {
        return (<View style={CSS.container.wrapper }>
            <View style={ CSS.header.base }>
                <Text style={ CSS.header.h1 }>
                    Kitchen Sink
                </Text>
            </View>
            <TouchableHighlight style={CSS.list.base}
                onPress={this.goTo.bind(this, Headers)}>
                <Text style={CSS.list.base__text}>
                    Headers
                </Text>
            </TouchableHighlight>
            <TouchableHighlight style={CSS.list.base}
                onPress={this.goTo.bind(this, Footer)}>
                <Text style={CSS.list.base__text}>
                    Footers
                </Text>
            </TouchableHighlight>
            <TouchableHighlight style={CSS.list.base}
                onPress={this.goTo.bind(this, Buttons)}>
                <Text style={CSS.list.base__text}>
                    Buttons
                </Text>
            </TouchableHighlight>
            <TouchableHighlight style={CSS.list.base}
                onPress={this.goTo.bind(this, Icons)}>
                <Text style={CSS.list.base__text}>
                    Icons
                </Text>
            </TouchableHighlight>
            <TouchableHighlight style={CSS.list.base}
                onPress={this.goTo.bind(this, Lists)}>
                <Text style={CSS.list.base__text}>
                    Lists
                </Text>
            </TouchableHighlight>
        </View>);
    }
};
