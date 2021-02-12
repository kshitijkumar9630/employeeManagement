import React from 'react';
import { Redirect, Route } from 'react-router-dom';
const Protected = ({ component: Component, ...rest }) => {
	console.log();
	return (
		<Route
			{...rest}
			render={(props) =>
				localStorage.getItem('token') ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{ pathname: '/adminSignin', state: { from: props.location } }}
					/>
				)
			}
		/>
	);
};
export default Protected;
