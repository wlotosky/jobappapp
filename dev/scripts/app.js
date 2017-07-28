import React from 'react';
import ReactDOM from 'react-dom';
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
				<JobForm/>
			</Router>
		)
	}
}

class JobForm extends React.Component {
	constructor() {
		super()
		this.state = {
			jobTitle: '',
			company: '',
			url: '',
			datePosted: '',
			dateApplied: '',
			contactName: '',
			contactTitle: '',
			contactEmail: ''
		}
	}
	render() {
		return (
			<form className="newJob-form" onSubmit={this.handleSubmit}>
				<input  name="jobTitle" value={this.state.jobTitle} onChange={this.handleChange} placeholder="" type="text" />
				<input  name="company" value={this.state.company} onChange={this.handleChange} placeholder="" type="text" />
				<input  name="url" value={this.state.url} onChange={this.handleChange} placeholder="" type="text" />
				<input  name="datePosted" value={this.state.datePosted} onChange={this.handleChange} placeholder="" type="date" />
				<input  name="dateApplied" value={this.state.dateApplied} onChange={this.handleChange} placeholder="" type="date" />
				<input  name="contactName" value={this.state.contactName} onChange={this.handleChange} placeholder="" type="text" />
				<input  name="contactTitle" value={this.state.contactTitle} onChange={this.handleChange} placeholder="" type="text" />
				<input  name="contactEmail" value={this.state.contactEmail} onChange={this.handleChange} placeholder="" type="email" />
			</form>
		)
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	handleSubmit(e) {
		e.preventDefault();
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));