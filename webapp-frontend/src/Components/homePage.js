import React, { Component } from 'react';

class HomePage extends Component {
	render() {
		return (
		    <div className="container-fluid">

				<h1 style={{margin: '2px'}}>
					Home
				</h1>
				<div>
					<h1 style={{color: 'red'}}> What is Melanoma?</h1>
				</div>
				<div>
					<h2>Melanoma is the deadliest kind of skin cancer. The American Cancer Society estimates that 87,110 new melanoma patients will be diagnosed and 9,730 melanoma patients will die in 2017 alone. Early detection of melanoma is crucial because if diagnosed and treated in its earliest stage, it is almost always curable.</h2>
				</div>
				<div>
					<h1 style={{color: 'red'}}> What is Melanoma Detector?</h1>
				</div>
				<div>
					 <h2>Melanoma Detector is a service for classifying skin lesion images as benign or malignant.</h2>
				</div>
				<div>
					<h1 style={{color: 'red'}}> How Do I Use Melanoma Detector?</h1>
				</div>
				<div>
					<h2>Easy! Go to our "Get Started" page, upload an image of your skin lesion and get an immediate diagnosis.</h2>
				</div>
				</div>

        )
	}
}

export default HomePage;
