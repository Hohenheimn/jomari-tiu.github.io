import React from 'react'
import { Link } from 'react-scroll'
import './home.css'

export default function Home() {
  return (
    <div className="head">
      <div className="inner-Head" id="head">
        <div className="head-text-con">
          <h1 className="head-h1" data-aos="fade-up">Hi, Welcome to my Portfolio</h1>
          <p className="head-p" data-aos="fade-up">I'm Jomari a Front End Web-Developer</p>
          <Link to="project" className="contact"  smooth={true} duration={500} data-aos="fade-in">Projects</Link>
        </div>
      </div>
    </div>
  )
}
