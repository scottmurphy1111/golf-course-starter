import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [navItems, setNavItems] = useState([{}])

  useEffect(() => {
    setNavItems([
      {
        'text': 'book now',
        'path': '/book'
      },
      {
        'text': 'course',
        'path': '/course'
      },
      {
        'text': 'contact',
        'path': '/contact'
      }
    ])
  
  }, [])
 
  return (
    <div id="navbar">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>
              <Link to='/'>
                Golf Course Starter
              </Link>
            </h1>
            <ul>
              {navItems.map((li: any, index: number) => (
                <li key={index}>
                <Link to={li.path}>{li.text}</Link>
                <a href="">{}</a>
                {
          
                  index !== navItems.length - 1 ?
                    <span>|</span>
                    : null
                }
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div >
  )
}

export default NavBar
