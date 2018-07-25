import React, { Component } from 'react'

class Footer extends Component {
  constructor(props) {
    super(props)

    
  }
  render() {
    return (
      <div id="footer">
        <div className="container">
          <div className="row">            
            <span className="company-name"><a href="">&copy; Golf Course Starter</a></span>
            <span className="address"><a href="">123 Main Golf Way Paradise, CY 30123</a></span>
            <span className="phone-num"><a href="">(888) 555-9900</a></span>
            <span className="email"><a href="">info@golfcourse.com</a></span>
            <div className="social-icons">
              <span><a>fb</a></span>
              <span><a>tw</a></span>
              <span><a>ig</a></span>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default Footer
