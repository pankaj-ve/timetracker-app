import React, {	Component} from 'react';
import { connect } from 'react-redux';

import { userActions } from '../../actions';

import  Header from '../shared/Header';
import  Sidebar from '../shared/Sidebar';

class Home extends Component {

	render() {
		return (
		
// <!-- Start wrapper-->
<div id="wrapper">

	<Sidebar />

	<Header />
 
	<div className="clearfix"></div>
	
	<div className="content-wrapper">
		<div className="container-fluid">

			{/* <!--Start Home Content--> */}

			{/* <!--End Home Content--> */}

		</div>
		{/* <!-- End container-fluid--> */}
		
		</div>
		{/* <!--End content-wrapper--> */}
		{/* <!--Start Back To Top Button--> */}
		<a href="#/" className="back-to-top"><i className="fa fa-angle-double-up"></i> </a>
		{/* <!--End Back To Top Button--> */}

		{/* <!--Start footer--> */}
		
	{/* <!--End footer--> */}
	{/* <!--End wrapper--> */}
 
 </div>

		)
	}

}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHome = connect(mapState, actionCreators)(Home);
export { connectedHome as Home };
// export default Home