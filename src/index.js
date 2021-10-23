import React from 'react';
import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import animation from './animation';
import * as serviceWorker from './serviceWorker';

const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;

ReactGA.initialize(TRACKING_ID);
animation();

ReactGA.event({
  category: 'PageView',
  action: 'Loaded',
});

ReactDOM.render(
  <App analyticsInstance={ReactGA}/>,
  document.getElementById('root')
);

serviceWorker.register();
