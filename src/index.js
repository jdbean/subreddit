import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/Scroll-To-Top';
import App from './App';
import './index.css';
import 'normalize.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
  , document.getElementById('root')
);

serviceWorker.unregister();
