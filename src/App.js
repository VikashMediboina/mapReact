import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeComponents from './components/cakeComponents';
import {Provider } from 'react-redux'
import store from './Redux/store'
import Navbar from './navbar';
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (<div>
   
  <Provider store={store}>
  <BrowserRouter>
  <Navbar />
  </BrowserRouter>
    </Provider> 
    </div>
  );
}

export default App;
