import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import Home from '../components/Home.jsx';
import About from '../components/About.jsx';
import Contact from '../components/Contact.jsx';
import $ from 'jquery';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';

import { useRouterHistory } from 'react-router';
import { createHistory } from 'history';

ReactDOM.render((
   <Router history = {hashHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
      </Route>
   </Router>
	
), document.getElementById('app'))