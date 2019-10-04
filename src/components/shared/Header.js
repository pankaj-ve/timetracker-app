import React from 'react';

import { Link } from 'react-router-dom';




class NavDropdown extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		isToggleOn: false
	  };
	}
	showDropdown(e) {
	  e.preventDefault();
	  this.setState(prevState => ({
		isToggleOn: !prevState.isToggleOn
	  }));
	}
	render() {
	  const classDropdownMenu = 'dropdown-menu profile-dropdown' + (this.state.isToggleOn ? ' show' : '')
	  return (
		<li className="nav-item dropdown">
		
		  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
			aria-haspopup="true" aria-expanded="false"
			onClick={(e) => {this.showDropdown(e)}}>
			<span className="user-profile"><img src="assets/images/avatars/avatar-13.png" className="img-circle" alt="user avatar" /></span>
		  </a>
		  <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
			{this.props.children}
		  </div>
		</li>
	  )
	}
  }

const Header = () => {
	return (
		<header className="topbar-nav">
			<nav className="navbar navbar-expand fixed-top">
				<ul className="navbar-nav mr-auto align-items-center">
					<li className="nav-item">
						<a href="#/" className="nav-link toggle-menu">
							<i className="icon-menu menu-icon"></i>
						</a>
					</li>
					<li className="nav-item">
						<form className="search-bar">
							<input type="text" className="form-control" placeholder="Enter keywords" />
								<a href="#/"><i className="icon-magnifier"></i></a>
						</form>
					</li>
				</ul>
				<span style={{paddingLeft:'20px', paddingTop:'10px'}}><Link to="/login">Logout</Link></span>

				<ul className="navbar-nav align-items-center right-nav-link">
					<li className="nav-item dropdown-lg">
						<a className="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect" data-toggle="dropdown" href="#/">
						<i className="fa fa-envelope-open-o"></i><span className="badge badge-light badge-up">12</span></a>
					</li>
					<li className="nav-item dropdown-lg">
						<a className="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect" data-toggle="dropdown" href="#/">
					<i className="fa fa-bell-o"></i><span className="badge badge-info badge-up">14</span></a>
						</li>


						<NavDropdown name="Dropdown"  >
						
							<a className="dropdown-item" href="/">Action</a>
							<a className="dropdown-item" href="/">Another action</a>
							<div className="dropdown-divider"></div>
							{/* <a className="dropdown-item" href="/">Logout</a> */}
							<Link  className="dropdown-item" to="/login">Logout</Link>
              			</NavDropdown>
					

				</ul>
			</nav>
		</header>

	)

}

export default Header;



