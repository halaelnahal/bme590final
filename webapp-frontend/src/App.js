import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import {orange500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Upload from './Upload';
import Prediction from './PredictionComponent'
import PaperExampleCircle from './paper';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Center from 'react-center'

const style = {
      height: 500,
      width: 500,
      //margin: 450,
      padding: 60,
      textAlign: 'center',
      display: 'inline-block',
    };

const muiTheme = getMuiTheme({
    palette:{
       primaryColor: deepOrange500,
       accentColor: orange500
    }
});


class App extends Component {

  render() {
    return (
	  	<MuiThemeProvider  muiTheme={muiTheme}>
	  	    <div className = "container">
	  	    <Center>
            <Paper style={style} zDepth={3} circle={true}>
                <div style = {{'backgroundColor': "orange",'textColor':'White', display: 'inline-block', textAlign: 'center' }}>
                <h1>Melanoma Detector </h1>
                </div>
                <h2><Upload style={{margin:200}}/></h2>
            </Paper>
            </Center>
            <div style={{textAlign: 'center'}}>
            <Prediction />
            </div>
            </div>
		</MuiThemeProvider>
    );
  }
}

export default App;
