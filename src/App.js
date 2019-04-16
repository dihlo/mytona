import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";
import {connect} from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        	<Switch>
						<Route exact path='/' component={Home}/>
					</Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
	};
}

export default withRouter(connect(mapStateToProps, {})(App));
