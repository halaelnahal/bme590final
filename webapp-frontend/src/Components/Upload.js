import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';
import { UploadField } from '@navjobs/upload';
import axios from 'axios'
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import PropTypes from 'prop-types';

class Upload extends Component {
	constructor() {
		super();
		this.state = {
			currentImageString: '',
			malignant_prob: '',
			non_malignant_prob: '',
			diagnosis: '',
		}
	}

    parsePrediction = (json_output) => {
        json_output.data.malignant_prob;
        console.log(json_output.data.malignant_prob);
        this.setState({malignant_prob: json_output.data.malignant_prob, non_malignant_prob: json_output.data.non_malignant_prob, diagnosis: json_output.data.diagnosis});
    }

	onUpload = (files) => {
		const reader = new FileReader()
		const file = files[0];
		const URL = 'http://vcm-1855.vm.duke.edu:8000/melanoma/prediction'
		var prediction_result;
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			this.setState({currentImageString: reader.result});
			prediction_result = axios.post(URL,this.state).then(this.parsePrediction);
		}
	}

	render() {
		return (
		    <div>
					{this.state.malignant_prob}
					{this.state.non_malignant_prob}
					{this.state.diagnosis}
		        <UploadField onFiles={this.onUpload}>
                <ImagesUploader
                    url="http://localhost:9090/notmultiple"
                    optimisticPreviews
                    multiple={false}
                    onLoadEnd={(err) => {
                        if (err) {
                            console.error(err);
                        }
                    }}
                    label="Upload a picture"
                    />
                    </UploadField>
				    <img src={this.state.currentImageString} />

             </div>
        )
	}
}

export default Upload;
