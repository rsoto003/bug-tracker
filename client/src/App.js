import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import BugList from './components/BugList';

class App extends Component {
  render(){
    return (
      <div className="App">
        <AppNavbar />
        <BugList />
      </div>
    );
  }
}

export default App;
