import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Homepage from './components/Homepage';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import State from './components/State';
import AdminSignUp from './components/Admin/AdminSignUp';
import AdminSignIn from './components/Admin/AdminSignIn';
import AdminDashboard from './components/Admin/AdminDashboard';
import EmployeeHomepage from './components/Employee/EmployeeHomepage';
import Protected from './components/Protected';
import EmployeeSignin from './components/Employee/EmployeeSignin';
// import Test from './components/Test';
const App = () => {
	return (
		<Router>
			<div className="App">
				<Header />
				{/* <State /> */}
				<Switch>
					<Route exact path="/" component={Homepage}></Route>
					<Route exact path="/state" component={State} />
					<Route exact path="/admin-signup" component={AdminSignUp} />
					<Route exact path="/admin-signin" component={AdminSignIn} />
					<Route exact path="/employee-homepage" component={EmployeeHomepage} />
					<Route exact path="/employee-signin" component={EmployeeSignin} />
					<Protected exact path="/admin-dashboard" component={AdminDashboard} />
					<Route component={Error} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
