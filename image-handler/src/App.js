import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropzone from 'react-dropzone';
import request from 'superagent';

class App extends Component {

  onDrop = (files) => {
      this.setState({
        files: files
      });
    }

  render() {
  return(
    <Dropzone
    multiple = {false}
    accept = "image/jpg"
    onDrop = {this.onDrop}
    >
    <p> Drag & Drop a skin image OR click to select a file! </p>
    </Dropzone>

    //<div><img src={this.state.files.preview} /> </div>}
  );
  }
}

export default App;
