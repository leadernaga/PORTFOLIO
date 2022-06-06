import React, { useState } from 'react';
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook,BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import ReactTooltip from 'react-tooltip';

export const Nav = () => {
  const [state, setState] = useState("#");
  const [over,setOver]=useState("")
  
  return (
      <div className="nav">
      <a onMouseOver={()=>setOver("hom")} data-tip data-for='home' href="#" onClick={() => setState("#")} className={state === "#" ? "active" : ""}><AiOutlineHome />
      {over == "home" && <ReactTooltip id='home' type='info'>
           <span>HOME</span>
         </ReactTooltip>}
      </a>
         

      <a data-tip data-for='about' href="#about" onClick={() => setState("about")} className={state === "about" ? "active" : ""}><AiOutlineUser />
      <ReactTooltip id='about' type='info'>
           <span>ABOUT</span>
         </ReactTooltip>
      </a>
      <a data-tip data-for='experience' href="#experience" onClick={() => setState("experience")} className={state === "experience" ? "active" : ""}>< BiBook />
      <ReactTooltip id='experience' type='info'>
           <span>EXPERIENCE</span>
         </ReactTooltip>
        
      </a>
      

      <a data-tip data-for='project' href="#portfolio" onClick={() => setState("services")} className={state === "services" ? "active" : ""}><RiServiceLine />
      
      <ReactTooltip id='project' type='info'>
           <span>PROJECT</span>
         </ReactTooltip>
      </a>
      <a data-tip data-for='contact' href="#contact" onClick={() => setState("contact")} className={state === "contact" ? "active" : ""}><BiMessageSquareDetail />
      <ReactTooltip id='contact' type='info'>
           <span>CONTACT US</span>
         </ReactTooltip>
      </a>
          
    </div>
  )
}
