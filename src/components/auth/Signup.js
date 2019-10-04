import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';

class Signup extends Component {
    constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			submitted : false
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.submitSignup = this.submitSignup.bind(this);
		
	}

	handleInputChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	submitSignup(e) {
		e.preventDefault();
		this.setState({ submitted: true });
		const { email, password } = this.state;
		if (email && password) {
			this.props.register(email, password);
		}
	}

	render(){
		// const { registering  } = this.props;
        // const { user, submitted } = this.state;
		return(
				// Start wrapper
				<div id="wrapper">
		 
				<div className="loader-wrapper"><div className="lds-ring"></div></div>
				 <div className="card card-authentication1 mx-auto my-5">
					 <div className="card-body">
						<div className="card-content p-2">
							 <div className="card-title text-uppercase text-center py-3">Sign Up</div>
								 <form>
									 <div className="form-group">
										 <label htmlFor="exampleInputUsername" className="sr-only">Email</label>
										<div className="position-relative has-icon-right">
										 <input type="text" id="exampleInputUsername" className="form-control input-shadow" placeholder="Enter Email" value={this.state.email} onChange={this.handleInputChange} name="email"/>
										<div className="form-control-position">
											<i className="icon-user"></i>
										</div>
								</div>
							 </div>
							 <div className="form-group">
							 <label htmlFor="exampleInputPassword" className="sr-only">Password</label>
								<div className="position-relative has-icon-right">
								 <input type="password" id="exampleInputPassword" className="form-control input-shadow" placeholder="Enter Password" value={this.state.password}
														onChange={this.handleInputChange}
														name="password"/>
								 
								 <div className="form-control-position">
									 <i className="icon-lock"></i>
								 </div>
								</div>
							 </div>
						 {/* <div className="form-row">
							<div className="form-group col-6">
								<div className="icheck-material-white">
									<input type="checkbox" id="user-checkbox" />
									<label htmlFor="user-checkbox">Remember me</label>
							 	</div>
							</div>
							<div className="form-group col-6 text-right">
							 <a href="authentication-reset-password.php" onClick={this.submitSignup}>Reset Password</a>
							</div>
						 </div> */}
							<button type="button" onClick={this.submitSignup} className="btn btn-light btn-block">Sign Up</button>
							 {/* <div className="text-center mt-3">Sign In With</div> */}
							 
							<div className="form-row mt-4">
							 {/* <div className="form-group mb-0 col-6">
								<button type="button" className="btn btn-light btn-block"><i className="fa fa-facebook-square"></i> Facebook</button>
							</div>
							<div className="form-group mb-0 col-6 text-right">
							 <button type="button" className="btn btn-light btn-block"><i className="fa fa-twitter-square"></i> Twitter</button>
							</div> */}
						 </div>
							
							</form>
							</div>
						 </div>
						 <div className="card-footer text-center py-3">
							 <p className="text-warning mb-0">Already have an account? <Link to="/login"> Login here</Link></p>
						 </div>
							</div>
					 
				 </div>
		)
	}

}


function mapState(state) {
    const { registering } = state.signup;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedSignup = connect(mapState, actionCreators)(Signup);
export { connectedSignup as Signup };