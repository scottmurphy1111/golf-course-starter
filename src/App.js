import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <NavBar />
        <Layout />
        <Footer />
      </div>
    );
  }
}

export default App;
