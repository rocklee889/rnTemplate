'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';

const RCTLog = require('RCTLog');

// import EvaList from '../containers/evaList.react';
// import ListContainer from '../containers/List/listContainer.react';
// import DetailContainer from '../containers/Detail/detailContainer.react';
import MainContainer from './containers/mainContainer.react';

// AppRegistry.registerComponent('DetailContainer', () => DetailContainer);
// AppRegistry.registerComponent('EvaList', () => ListContainer);
// AppRegistry.registerComponent('ListContainer', () => ListContainer);
AppRegistry.registerComponent('MainContainer', () => MainContainer);