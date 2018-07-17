import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import BgImage from './images/golf-course-bg.jpg';
import Footer from './components/Footer';

const pageWrapper = {
  background: `url(${BgImage}) 50% 0% no-repeat`,
  backgroundSize: 'cover',
  width: '100%',
  height: '100vh',
  padding: '0.25rem 1rem',
  boxSizing: 'border-box'
}

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        <div className="page-wrapper" style={pageWrapper}>
          <NavBar />
          <Layout />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
