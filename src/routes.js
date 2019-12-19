import React from 'react';
import FrontPage from './components/FrontPage';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Register from './components/Register';
import {Switch, Route} from 'react-router-dom';

export default (
<Switch>
    <Route component={FrontPage} exact path="/" />
    <Route component={About} path="/about" />
    <Route component={Contact} path="/contact" />
    <Route component={Cart} path="/cart" />
    <Route component={Register} path="/register" />
</Switch>
)