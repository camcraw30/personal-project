import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import './App.scss';
import {HashRouter, } from 'react-router-dom';
import routes from './routes';
// import axios from "axios";
import Header from './components/Header';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}> 
      <HashRouter>
        <Header />
        {routes}
      </HashRouter>
      </Provider>
      
    )
  }
}
