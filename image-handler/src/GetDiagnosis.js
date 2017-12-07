import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

class GetDiagnosis extends Component{

    state = {
        'Prediction': [],
    }

    getData = () => {
        axios.get('http://melanoma/prediction').then( (data) => {
            console.log(data);
            console.log("Prediction:")
            console.log(data.data)
            //check status code, if 200 set state, if not display error to user
            this.setState({'Prediction': data.data})
        });
    }
    render(){
        return(
            <div>
                <RaisedButton label="Get Prediction" primary={true} onClick = {this.getData}/>
                {
                    (this.state.Prediction.length>0) ? this.state.Prediction : "NO DATA"
                }
            </div>

        )
    }
}

export default GetDiagnosis;