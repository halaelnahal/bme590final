import React, { Component } from 'react';
import Upload from './Upload'
import Paper from 'material-ui/Paper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {indigo900, redA700, white, red200, red400, red500, teal900, teal500} from 'material-ui/styles/colors';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Title from './Title'
import Center from 'react-center'
import Prediction from './Prediction'

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
       primaryColor1: redA700,
       primaryColor2: white,
       accentColor: teal500
    }
});


class GetStarted extends Component {
	render() {
		return (
		    <div>
                <h1 style={{margin: '15px'}}>
					Get Started
				</h1>

		    <MuiThemeProvider  muiTheme={muiTheme}>
		    <div className = "container">
            <Center>
             <Paper style={style} zDepth={3} circle={true}>
                 <Title />
            <h2><Upload style={{margin:0}}/></h2>
            </Paper>
            </Center>
            </div>
                <div>
                <Center>
                <Prediction />
                </Center>
                </div>
            </MuiThemeProvider>
            </div>
        )
	}
}

export default GetStarted;
