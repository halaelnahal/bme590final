import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {deepOrange500, orange500, white, red200, red400} from 'material-ui/styles/colors';
import Upload from './Upload';
import Prediction from './PredictionComponent'
import PaperExampleCircle from './paper';
import Paper from 'material-ui/Paper';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Center from 'react-center'
import Title from './Title'
import Bar from './Bar'

const style = {
      height: 500,
      width: 500,
      margin: 40,
      padding: 60,
      textAlign: 'center',
      display: 'inline-block',
    };

const muiTheme = getMuiTheme({
    palette:{
       primaryColor1: deepOrange500,
       primaryColor2: white,
       accentColor: orange500
    }
});


class App extends Component {

  render() {
    return (
	  	<MuiThemeProvider  muiTheme={muiTheme}>
	  	    <Bar />
	  	    <div className = "container">
	  	    <Center>
            <Paper style={style} zDepth={3} circle={true}>
                <Title />
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
