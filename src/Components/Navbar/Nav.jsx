import React, { useState } from 'react';
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook,BiMessageSquareDetail } from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri"

export const Nav = () => {
    const [state,setState]=useState("#")
  return (
      <div className="nav">
          <a href="#" onClick={()=>setState("#")} className={state==="#" ? "active" : ""}><AiOutlineHome /></a>
          <a href="#about" onClick={()=>setState("about")}  className={state==="about" ? "active" : ""}><AiOutlineUser/></a>
          <a href="#experience" onClick={()=>setState("experience")}  className={state==="experience" ? "active" : ""}>< BiBook/></a>
          <a href="#portfolio" onClick={()=>setState("services")}  className={state==="services" ? "active" : ""}><RiServiceLine /></a>
          <a href="#contact" onClick={()=>setState("contact")}  className={state==="contact" ? "active" : ""}><BiMessageSquareDetail /></a>
          
    </div>
  )
}
