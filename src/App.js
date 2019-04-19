import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from "./components/Home";
import Contacts from "./components/Contacts";
import TopMenu from './components/TopMenu';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import CardInfo from './components/CardInfo';


class App extends Component {
  render() {
    return (
      <div>
        <TopMenu />
        <div className="App">
            <Switch >
              <Route exact path='/' component={Home}/>
              <Route exact path='/contacts' component={Contacts}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/portfolio' component={Portfolio}/>
              <Route exact path='/cardinfo' component={CardInfo}/>
            </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
	};
}

export default withRouter(connect(mapStateToProps, {})(App));
