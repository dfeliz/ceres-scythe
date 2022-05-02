import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import runAnimation from './extras/animation';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App runAnimation={runAnimation} />,document.getElementById('root'));

serviceWorker.unregister();
