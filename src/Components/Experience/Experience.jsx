import React from 'react';
import "./Experience.css"
import {BsPatchCheckFill} from "react-icons/bs"

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="expeience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
           
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                 <h4>HTML</h4>
              <small className="text-light">Experienced</small>
             </div>
            </article><article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>CSS</h4>
              <small className="text-light">Experienced</small></div>
            </article><article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
             <div> <h4>Javascript</h4>
              <small className="text-light">Experienced</small></div>
            </article><article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
             <div> <h4>React JS</h4>
              <small className="text-light">Experienced</small></div>
            </article><article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Tailwind</h4>
              <small className="text-light">InterMediate</small></div>
            </article><article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
             <div> <h4>Meterial UI</h4>
              <small className="text-light">InterMediate</small></div>
            </article>
          </div>
        </div>

        {/* ########################################### BACKEND SKILLS ######################################## */}
        
        <div className="experience__backend">
<h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
<div>              <h4>Node JS</h4>
              <small className="text-light">InterMediate</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>MongoDB</h4>
              <small className="text-light">Intermediate</small></div>
            </article><article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
<div>              <h4>EXPRESS JS</h4>
              <small className="text-light">InterMediate</small></div>
            </article><article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>JAVA</h4>
              <small className="text-light">BASIC</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
