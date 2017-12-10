import React, { Component } from 'react';
import{
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './Assets/css/default.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {indigo900, indigo400, white, red200, red400, red500, teal900, teal500} from 'material-ui/styles/colors';
import Upload from './Components/Upload';
import Prediction from './Components/Prediction'
import PaperExampleCircle from './Components/paper';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Center from 'react-center'
import Title from './Components/Title'
import Bar from './Components/Bar'
import Header from './Components/Header'
import HomePage from './Components/homePage'
import GetStarted from './Components/GetStarted'




class App extends Component {
  render() {
    return (
        <Router>
        <div className="App">

	  	    <Header />

                <Route exact path='/' component={HomePage} />
                <Route exact path='/GetStarted' component={GetStarted} />


        </div>
        </Router>
    );
  }
}

export default App;
