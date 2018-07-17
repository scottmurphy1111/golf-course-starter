import React from 'react'
import Tagline from '../images/course-with-class.svg';

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <img className="tagline" src={Tagline} />
      <div className="content-box">
        <h2>Play golf</h2>
      </div>
    </div>
    
  )
}

export default Layout
