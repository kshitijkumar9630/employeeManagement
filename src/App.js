import React from "react";
import "./App.css";

import Header from './components/Header';
import Footer from './components/Footer';
import CreateEmployee from './components/CreateEmployee'
import State from './components/State'

const App = () => {
	return (
		<div className="App">
      <Header/>
      <Footer/>
			<CreateEmployee/>
			<State/>
		</div>
	);
};

export default App;
