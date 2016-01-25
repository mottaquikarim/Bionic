'use strict';

import React, {
  AppRegistry,
  Component,
  Navigator,
  NavigatorIOS
} from 'react-native';

import {
    Main
} from './kitchensink/app'

var Emitter = require('event-emitter');

class MovieButler extends Component {
  constructor( props ) {
    super( props );
    this.state = {
        data: {
            component: 0 ,
        },
        emitter: Emitter({}),
    }
  }
  componentDidMount() {}
  _renderScene( route, navigator ) {
    var Component = route.component;
    var additionalProps = {
        data: this.state.data,
        evt: this.state.emitter,
    }
    return (
      <Component {...route.props} {...additionalProps} navigator={navigator} route={route} />
    );
  }
  render() {
    var navProps = {
        initialRoute: {
            type: 'right',
            component: Main,
        },
        renderScene: this._renderScene.bind(this),
    };

    return (<Navigator {...navProps} />);
  }
}

AppRegistry.registerComponent('MovieButler', () => MovieButler);

