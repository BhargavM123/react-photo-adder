import React from "react";
// import React, {Component} from "react";
import ReactDOM from "react-dom";
import '../src/styles/stylesheet1.css'
import '../src/styles/stylesheetdemo.css'
import Main1 from '../src/photoscenic/Main1'
//REACT ROUTER
import {BrowserRouter} from 'react-router-dom'
//redux
import {createStore} from 'redux'
import rootReducer from './redux/reducer.js'  //return current state
import {Provider} from 'react-redux'
import App from "./photoscenic/app"

const store = createStore(rootReducer)


// ReactDOM.render(<BrowserRouter><Main1/></BrowserRouter>, document.getElementById('root'));  //react-router
ReactDOM.render(<Provider store = {store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));
