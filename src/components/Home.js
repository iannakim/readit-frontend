import React, { useState } from 'react'
import {withRouter} from 'react-router-dom'
import './home.css'
import cloud from '../images/cloud.png';
import spaceship from '../images/spaceship.png';
import quote from '../images/quote.png';

function Home() {
  const [offset, setOffset] = useState()

  const handleScroll = () => setOffset(window.pageYOffset)

  window.addEventListener('scroll', handleScroll)

  return (
    <div className="Home">
      <div className="zoom">
        <img src={spaceship} alt="" id="spaceship"
          style={{width: (100 + offset * 0.3) + '%'}}
        />
        <img src={cloud} alt="" id="cloud"
          style={{width: (100 + offset * 0.3) + '%'}}
        />
        <img src={quote} alt="" id="quote"
          style={{top: `-${10 + offset * 0.3 + '%'}`}}
        />
      </div>


      <div className="content">
        <h1>Welcome to READ.IT</h1>
        <h2>Find and read all the latest news from around the globe and level up in your reading comprehension skills!</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. In arcu cursus euismod quis viverra nibh cras. Ut lectus arcu bibendum at varius vel. Et molestie ac feugiat sed lectus. Morbi blandit cursus risus at. Diam maecenas ultricies mi eget. Et magnis dis parturient montes nascetur ridiculus mus. Vivamus at augue eget arcu. Ipsum dolor sit amet consectetur adipiscing. Eget mi proin sed libero enim sed faucibus turpis. Velit euismod in pellentesque massa placerat duis ultricies lacus. 
        </p>
        <p>
        Consectetur adipiscing elit duis tristique. In egestas erat imperdiet sed euismod nisi porta lorem. Varius duis at consectetur lorem. At imperdiet dui accumsan sit amet. Aliquam etiam erat velit scelerisque in dictum non. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Tincidunt id aliquet risus feugiat in ante. Diam ut venenatis tellus in metus vulputate. Etiam tempor orci eu lobortis elementum nibh. Amet porttitor eget dolor morbi non. In nulla posuere sollicitudin aliquam ultrices. Arcu non odio euismod lacinia at quis risus sed. Malesuada fames ac turpis egestas maecenas pharetra. Porttitor massa id neque aliquam vestibulum. Lacinia quis vel eros donec ac odio tempor orci dapibus. Sit amet purus gravida quis blandit turpis. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Felis bibendum ut tristique et egestas quis. Dui id ornare arcu odio ut sem nulla.
      </p>
      </div>
    </div>
  )
}

export default withRouter(Home);