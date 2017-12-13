import React, { Component } from 'react';
import{
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './Assets/css/default.min.css';
import Header from './Components/Header'
import HomePage from './Components/homePage'
import GetStarted from './Components/GetStarted'
import ContactPage from './Components/ContactPage'




class App extends Component {
  render() {
    return (
        <Router>
        <div className="App">

	  	    <Header />

                <Route exact path='/' component={HomePage} />
                <Route exact path='/GetStarted' component={GetStarted} />
                <Route exact path='/ContactPage' component={ContactPage} />



        </div>
        </Router>
    );
  }
}

export default App;
