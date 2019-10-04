import React from 'react';


const Sidebar = () =>{
	return (
		<div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
		<div className="brand-logo">
		 <a href="index.html">
			<img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon"/> 
			<h5 className="logo-text">Admin home</h5>
		</a>
	</div>
	<div className="user-details">
	 <div className="media align-items-center user-pointer collapsed" data-toggle="collapse" data-target="#user-dropdown">
		 <div className="avatar"><img className="mr-3 side-user-img" src="assets/images/avatars/avatar-13.png" alt="user avatar"/></div>
			<div className="media-body">
			<h6 className="side-user-name">Admin Name</h6>
		 </div>
			</div>
		 </div>
	<ul className="sidebar-menu do-nicescrol">
		 <li className="sidebar-header">MAIN NAVIGATION</li>
		 
		 
		 
		

		 <li>
			 <a href="#/" className="waves-effect">
				 <i className="zmdi zmdi-lock"></i> <span>Authentication</span>
				 <i className="fa fa-angle-left float-right"></i>
			 </a>
			</li>

			
		
		 <li>
			 <a href="#/" className="waves-effect">
				 <i className="zmdi zmdi-collection-folder-image"></i> <span>Sample Pages</span>
				 <i className="fa fa-angle-left float-right"></i>
			 </a>
			</li>

			<li className="sidebar-header">LABELS</li>
		 <li><a href="#/" className="waves-effect"><i className="zmdi zmdi-coffee text-danger"></i> <span>Important</span></a></li>
		 <li><a href="#/" className="waves-effect"><i className="zmdi zmdi-chart-donut text-success"></i> <span>Warning</span></a></li>
		 <li><a href="#/" className="waves-effect"><i className="zmdi zmdi-share text-info"></i> <span>Information</span></a></li>
	 </ul>
	
	</div>
	)
}

export default Sidebar