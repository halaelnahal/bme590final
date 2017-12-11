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
			prediction_result: '',
		}
	}

    parsePrediction = (json_output) => {
        json_output.data.report_melanoma;
        console.log(json_output.data.report_melanoma);
        this.setState({prediction_result: json_output.data.report_melanoma});
    }


	onUpload = (files) => {
		const reader = new FileReader()
		const file = files[0];
		var prediction_result;
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			this.setState({currentImageString: reader.result});
			prediction_result = axios.post('http://vcm-1855.vm.duke.edu:8000/melanoma/prediction',this.state).then(this.parsePrediction);
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
						{this.state.prediction_result}
					</div>
				</UploadField>
				<img src={this.state.currentImageString} />
			</div>
		)
	}
}

export default Upload;
