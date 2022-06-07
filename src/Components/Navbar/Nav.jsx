import React, { useState } from 'react';
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook,BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';


export const Nav = () => {
  const [state, setState] = useState("#");
  tippy('#m', {
  content: "I'm a Tippy tooltip!",
});
  
  
  return (
    <div className="nav">
      <tippy content="home">
      <a id="hm" data-tip data-for='ho' href="#" onClick={() => setState("#")} className={state === "#" ? "active" : ""}><AiOutlineHome /></a>
        </tippy> 

      <a id="m" href="#about" onClick={() => setState("about")} className={state === "about" ? "active" : ""}><AiOutlineUser />
      
      </a>
      <a href="#experience" onClick={() => setState("experience")} className={state === "experience" ? "active" : ""}>< BiBook />

        
      </a>
      

      <a  href="#portfolio" onClick={() => setState("services")} className={state === "services" ? "active" : ""}><RiServiceLine />
      
      
      </a>
      <a data-tip data-for='cntct' href="#contact" onClick={() => setState("contact")} className={state === "contact" ? "active" : ""}><BiMessageSquareDetail />

      </a>
          
    </div>
  )
}
