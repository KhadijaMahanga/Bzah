import React from 'react';
import ReactDOM from 'react-dom';
//import Router from 'react-router';
// Import routing components{ HashRouter as Router, Route }
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

import Main from './common/Main'
import Home from './common/Home'
import About from './common/About'

ReactDOM.render(
   <Router history={browserHistory}>
      <Main>
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/>
      </Main>
   </Router>,
   document.getElementById('container')
);
