import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './home.css'
import bg from '../images/bg.jpg';
import cloud1 from '../images/cloud1.png';
import cloud2 from '../images/cloud2.png';
import ironman from '../images/ironman.png';
import jet from '../images/jet.png';
import moon from '../images/moon.png';

class Home extends React.Component {

  componentDidMount (){
    const script1 = document.createElement("script")
    const script2 = document.createElement("script")

    script1.src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js";
    script1.async = true;

    script2.src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js";
    script2.async = true;

    document.body.appendChild(script1)
    document.body.appendChild(script2)

  }





  render(){
    return (
      <div className="Home">
        <section>
          <img src={bg} id="bg"/>
          <img src={moon} id="moon"/>
          <img src={cloud1} id="cloud1"/>
          <img src={cloud2} id="cloud2"/>
          <img src={jet} id="jet"/>
          <img src={ironman} id="ironman"/>
        </section>
        <div className="sec">
          <div className="content">
            <h2>Hi Welcome to READ.IT</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur. In arcu cursus euismod quis viverra nibh cras. Ut lectus arcu bibendum at varius vel. Et molestie ac feugiat sed lectus. Morbi blandit cursus risus at. Diam maecenas ultricies mi eget. Et magnis dis parturient montes nascetur ridiculus mus. Vivamus at augue eget arcu. Ipsum dolor sit amet consectetur adipiscing. Eget mi proin sed libero enim sed faucibus turpis. Velit euismod in pellentesque massa placerat duis ultricies lacus. 
            </p>
            <p>
            Consectetur adipiscing elit duis tristique. In egestas erat imperdiet sed euismod nisi porta lorem. Varius duis at consectetur lorem. At imperdiet dui accumsan sit amet. Aliquam etiam erat velit scelerisque in dictum non. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Tincidunt id aliquet risus feugiat in ante. Diam ut venenatis tellus in metus vulputate. Etiam tempor orci eu lobortis elementum nibh. Amet porttitor eget dolor morbi non. In nulla posuere sollicitudin aliquam ultrices. Arcu non odio euismod lacinia at quis risus sed. Malesuada fames ac turpis egestas maecenas pharetra. Porttitor massa id neque aliquam vestibulum. Lacinia quis vel eros donec ac odio tempor orci dapibus. Sit amet purus gravida quis blandit turpis. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Felis bibendum ut tristique et egestas quis. Dui id ornare arcu odio ut sem nulla.
          </p>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Home)