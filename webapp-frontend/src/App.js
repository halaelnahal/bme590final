import React, { Component } from 'react';
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
       primaryColor1: teal900,
       primaryColor2: white,
       accentColor: teal500
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
                <h2><Upload style={{margin:0}}/></h2>
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
