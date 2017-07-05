import './web/src/index.css';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { render } from 'react-dom';

import { PaRouter } from './common/chameleonLib';
const Router = PaRouter.Router;
import routes from './web/src/routes';

PaRouter.registRoutes(routes);
render( <Router routes={routes} />, document.getElementById('react-root'));
