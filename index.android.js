'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    NativeModules,
    View
} from 'react-native';

const RCTLog = require('RCTLog');
import ListContainer from './containers/List/listContainer.react';
import DetailContainer from './containers/Detail/detailContainer.react';


AppRegistry.registerComponent('DetailContainer', () => DetailContainer);
AppRegistry.registerComponent('EvaList', () => ListContainer);
AppRegistry.registerComponent('ListContainer', () => ListContainer);
