import react from 'react';
import reactDOM  from 'react-dom';
import {
	BrowserRouter as Router,
	NavLink as Link,
	Route
} from 'react-router-dom';

class App extends React.Component {
	constructor() {
		super()
		this.state = {

		}
	}
	render() {
		return (
			<Router>

			</Router>
		)
	}
}

class JobForm extends React.Component {
	constructor() {
		super()
		this.state = {

		}
	}
	render() {
		return (
			<form className="newJob-form">
				<input type="text" name="" onChange={this.handleChange} placeholder=""/>
			</form>
		)
	}
}