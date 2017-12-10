import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

const Title = (props) => (
    <h1 style={{color: props.muiTheme.palette.primaryColor2, background: props.muiTheme.palette.primaryColor1,textAlign: 'center',
      display: 'inline-block'}}>
        Melanoma Detector
    </h1>
);
export default muiThemeable()(Title);