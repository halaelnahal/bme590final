import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

const Prediction = (props) => (
    <h2 style={{color: props.muiTheme.palette.primaryColor1}}>
        Prediction:               Confidence:
    </h2>
);
export default muiThemeable()(Prediction);


