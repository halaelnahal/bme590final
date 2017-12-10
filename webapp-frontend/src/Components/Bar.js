import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from 'material-ui/AppBar';

const Bar = (props) => (

    <AppBar title="Welcome!" style={{backgroundColor: props.muiTheme.palette.accentColor, textAlign: 'center'}}/>
);
export default muiThemeable()(Bar);
