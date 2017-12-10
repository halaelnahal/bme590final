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
		}
	}

    parsePrediction = (json_output) => {
        json_output["malignant"];
    }


	onUpload = (files) => {
		const reader = new FileReader()
		const file = files[0]
		var prediction_result
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			console.log(reader.result);
			this.setState({currentImageString: reader.result});
			prediction_result = axios.post('http://vcm-1855.vm.duke.edu:8000/melanoma/prediction',this.state).then(this.parsePrediction);
		}
	}

	render() {
		return (
		    <div>
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
