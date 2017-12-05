import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Sites from './Sites';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>
        Hello World!
        <Counter name = "Serge" />
        <Counter name = "Sarah" />
        <Sites />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
