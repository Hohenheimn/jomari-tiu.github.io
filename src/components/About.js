import React from 'react'
import './about.css';
export default function About({skill_tool, aboutMe}) {

  return (
    <div className="about" id="about">

      <div className="about-left">
        <div className="about-me">
          <div className="about-text">
            <h1
            	data-aos="fade-right"
              data-aos-easing="ease-in-sine"
            >About me!</h1>
            <p
            	data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-delay="300"
            >
              {
                aboutMe.map(abt => {
                  return abt.line1 + abt.line2
                })
              }
            </p>
          </div>

          <div className="skill-con">
            {
              skill_tool.map(skil => (
                <div key={skil.key} className="skill"	data-aos="fade-right" data-aos-delay="600" data-aos-offset="0">{skil.name}</div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="about-right">
          <img src="images/me.jpg" className="me" alt="" data-aos="flip-right" data-aos-easing="ease-in-sine"/>
      </div>

    </div>
  )
}
