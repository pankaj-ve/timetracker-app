import React, { Component } from 'react';
import {	Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions';



class Login extends Component {
	constructor(props) {
		super(props);
		this.props.logout();
		this.state = {
			email: '',
			password: '',
			submitted: false
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.submitLogin = this.submitLogin.bind(this);
		
	}

	handleInputChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	submitLogin(e) {
		e.preventDefault();
		this.setState({ submitted: true });
		const { email, password } = this.state;
		if (email && password) {
			this.props.login(email, password);
		}
	}

	render(){
		const { loggingIn } = this.props;
		const { email, password, submitted } = this.state;
		return(
			<div id="wrapper">
		 
			<div className="loader-wrapper"><div className="lds-ring"></div></div>
			 <div className="card card-authentication1 mx-auto my-5">
				 <div className="card-body">
					<div className="card-content p-2">
					 	<div className="card-title text-uppercase text-center py-3">Sign In</div>
						 	<form>
						 		<div className="form-group">
						 			<label htmlFor="exampleInputUsername" className="sr-only">Email</label>
									<div className="position-relative has-icon-right">
							 		<input type="text" id="exampleInputUsername" className="form-control input-shadow" placeholder="Enter Email" value={this.state.email} onChange={this.handleInputChange} name="email"/>
									 { submitted && !email && <div className="help-block">Email is required</div> }
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
								{ submitted && !password && <div className="help-block">Password is required</div> }
							 <div className="form-control-position">
								 <i className="icon-lock"></i>
							 </div>
							</div>
						 </div>
					 <div className="form-row">
						<div className="form-group col-6">
							<div className="icheck-material-white">
										 <input type="checkbox" id="user-checkbox" />
										 <label htmlFor="user-checkbox">Remember me</label>
						 </div>
						</div>
						<div className="form-group col-6 text-right">
						 <a href="authentication-reset-password.php" onClick={this.submitLogin}>Reset Password</a>
						</div>
					 </div>
						<button type="button" onClick={this.submitLogin} className="btn btn-light btn-block">Sign In</button>
						{loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
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
						 <p className="text-warning mb-0">Do not have an account? <Link to="/signup"> Sign Up here</Link></p>
					 </div>
						</div>
				 
			 </div>
		
		)
	}
}
function mapState(state) {
	const { loggingIn } = state.authentication;
	return { loggingIn };
}

const actionCreators = {
	login: userActions.login,
	logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(Login);
export { connectedLoginPage as Login };


// const mapStateToProps = state => ({
// 	isLoading: state.loading.isLoading,
// 	isAuthenticated: state.auth.isAuthenticated,
// 	user: state.auth.user,
// 	error: state.auth.error,
//   });
  
//   const mapDispatchToProps = dispatch => ({
// 	onLogin: (email, password) => dispatch(login(email, password)),
//   });
  
//   export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps,
//   )(Login);