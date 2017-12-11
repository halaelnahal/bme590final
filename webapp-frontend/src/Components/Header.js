import React, { Component } from 'react';
import{
    Link
} from 'react-router-dom'

class Header extends Component {
	render() {
		return (
		    <header>
		    <div className="logo">
				<h1>MELANOMA DETECTOR</h1>
		    </div>

		    <nav>
		        <ul>
		            <li className="first">
		                <Link to="/">Home</Link>
		            </li>
		            <li>
						<Link to="/GetStarted">Get Started</Link>
		            </li>
		            <li className = "last">
		                <Link to="/">Contact</Link>
		            </li>
		        </ul>
		    </nav>
		    </header>
        )
	}
}

export default Header;
