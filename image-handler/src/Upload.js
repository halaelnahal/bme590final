import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';
import { UploadField } from '@navjobs/upload';
import axios from 'axios'

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
				<h2>Upload your image</h2>
				<UploadField onFiles={this.onUpload}>
					<div style={{
							backgroundColor: 'gray',
							width:'200px',
							height:'200px',
							textAlign: 'center'}}>
						Upload here
						{this.state.malignant_prob}
						{this.state.non_malignant_prob}
						{this.state.diagnosis}
					</div>
				</UploadField>
				<img src={this.state.currentImageString} />
			</div>
		)
	}
}

export default Upload;
