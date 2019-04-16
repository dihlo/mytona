import React, { Component } from 'react';
import './css/Home.css';
import TopMenu from './TopMenu';
import BigPicture from './BigPicture';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
        <div>
            <TopMenu />
            <BigPicture />
            <Footer />
        </div>
    );
  }
}

export default Home;
