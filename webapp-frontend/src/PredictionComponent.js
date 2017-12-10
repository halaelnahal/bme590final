import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

const Prediction = (props) => (
    <h1 style={{color: props.muiTheme.palette.primaryColor1}}>
        <div>
        <h5>Prediction:</h5>
        </div>
        <div>
        <h5>Confidence:</h5>
        </div>
    </h1>
);
export default muiThemeable()(Prediction);


