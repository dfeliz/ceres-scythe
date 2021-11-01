import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import runAnimation from './extras/animation';
import * as serviceWorker from './serviceWorker';

runAnimation();

ReactDOM.render(<App />,document.getElementById('root'));

serviceWorker.unregister();
