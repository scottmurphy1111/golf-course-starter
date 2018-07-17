import React from 'react'
import Tagline from '../images/course-with-class.svg';

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <img className="tagline" src={Tagline} />
      <div className="content-box">
        <h3>Come Play the Areas Most Amazing Golf Course Today!</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ea inventore enim, fugiat, voluptate maxime consequatur animi quia rerum velit soluta quasi repellat nemo saepe molestias quos. Temporibus, expedita labore.</p>
      </div>
    </div>
    
  )
}

export default Layout
