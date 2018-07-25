import React, { Component } from 'react';
// import GolfballImage from '../images/logo-golfball.svg';

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      NavItems: [
        'book now',
        'course',
        'contact'
      ]
    }
  }
  
  render() {
    console.log(this.state.NavItems)
    
    const lis = this.state.NavItems.map((li, index) => (
      <li key={index}>
        <a href="">{li}</a>
        {
          index === 0 || index === 1 ?
            <span>|</span>
          : null
        }
      </li>
    ));

    return (
      <div id="navbar">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>Golf Course Starter</h1>
              <ul>
                {lis}
              </ul>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default NavBar
