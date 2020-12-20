import React, { useEffect, useState } from 'react';
import Tagline from '../images/course-with-class.svg';

const Home = () => {
  const [layout, setLayout] = useState(['', '']);

  const setUi = () => {
    const layoutItems = [
      'Need a Tee Time? Book Now!',
      'Check Out the Golf Course!',
      'Become a Member Today!'
    ];
    setLayout(layoutItems)
  }

  useEffect(() => {
    setUi();
  }, [])

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
                  {layout.map((li, index) => (
                    <li key={index}>
                      <span></span>
                      <p>{li}</p>
                    </li>
                  ))}
                </ul>
                <h3>More Information is Below</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eaque veritatis deleniti consequuntur, ducimus sed iusto reprehenderit repudiandae at dicta libero. Neque aperiam repellat facilis quis beatae. Laborum, incidunt pariatur?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas sunt ducimus fugiat iusto debitis aut, molestiae iste illo pariatur. Optio omnis exercitationem quas eum tempora iure, itaque reprehenderit hic fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eaque veritatis deleniti consequuntur, ducimus sed iusto reprehenderit repudiandae at dicta libero. Neque aperiam repellat facilis quis beatae. Laborum, incidunt pariatur?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas sunt ducimus fugiat iusto debitis aut, molestiae iste illo pariatur. Optio omnis exercitationem quas eum tempora iure, itaque reprehenderit hic fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eaque veritatis deleniti consequuntur, ducimus sed iusto reprehenderit repudiandae at dicta libero. Neque aperiam repellat facilis quis beatae. Laborum, incidunt pariatur?
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas sunt ducimus fugiat iusto debitis aut, molestiae iste illo pariatur. Optio omnis exercitationem quas eum tempora iure, itaque reprehenderit hic fuga!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
