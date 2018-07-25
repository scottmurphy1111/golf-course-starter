import React, { Component } from 'react'
import Tagline from '../images/course-with-class.svg';

class Layout extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       LayoutItems: [
         'Need a Tee Time? Book Now!',
         'Check Out the Golf Course!',
         'Become a Member Today!'
       ]
    }
  }
  
  render() {
    const lis = this.state.LayoutItems.map((li, index) => (
      <li key={index}>
        <span></span>
        <p>{li}</p>
      </li>
    ))
    return (
      <div className="layout-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xs-8 col-xs-offset-2">
              <img className="tagline" src={Tagline} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="content-box">
                <div className="content-box-viewport">
                  <h3>Come Play the Areas Most Amazing Golf Course Today!</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque ea inventore enim, fugiat, voluptate maxime consequatur animi <a href="">quia rerum velit soluta</a> quasi repellat nemo saepe molestias quos. Temporibus, expedita labore.</p>
                  <ul>
                    {lis}
                  </ul>
                  <h3>More Information is Below</h3>
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eaque veritatis deleniti consequuntur, ducimus sed iusto reprehenderit repudiandae at dicta libero. Neque aperiam repellat facilis quis beatae. Laborum, incidunt pariatur?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas sunt ducimus fugiat iusto debitis aut, molestiae iste illo pariatur. Optio omnis exercitationem quas eum tempora iure, itaque reprehenderit hic fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eaque veritatis deleniti consequuntur, ducimus sed iusto reprehenderit repudiandae at dicta libero. Neque aperiam repellat facilis quis beatae. Laborum, incidunt pariatur?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas sunt ducimus fugiat iusto debitis aut, molestiae iste illo pariatur. Optio omnis exercitationem quas eum tempora iure, itaque reprehenderit hic fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eaque veritatis deleniti consequuntur, ducimus sed iusto reprehenderit repudiandae at dicta libero. Neque aperiam repellat facilis quis beatae. Laborum, incidunt pariatur?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas sunt ducimus fugiat iusto debitis aut, molestiae iste illo pariatur. Optio omnis exercitationem quas eum tempora iure, itaque reprehenderit hic fuga! 
                  </p>
                </div>
                </div>
              {/* <span className="frame">
              </span> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
