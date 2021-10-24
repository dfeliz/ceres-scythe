import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import animation from './animation';
import * as serviceWorker from './serviceWorker';

animation();

ReactDOM.render(<App />,document.getElementById('root'));

serviceWorker.register();
