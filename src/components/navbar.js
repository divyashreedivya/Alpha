import React,{useState} from 'react';
import '../css/nav.css';
import {NavLink} from 'react-router-dom';
import { Icon, InlineIcon } from '@iconify/react';
import hamburgerMenu from '@iconify/icons-radix-icons/hamburger-menu';
import chromeClose from '@iconify/icons-codicon/chrome-close';

export default function Navbar(){
    const [open,setOpen] = useState(false);
    const [iconopen,setIconopen] = useState(hamburgerMenu);

    const toggleNav =()=>{
      setOpen(!open);
      if(open){
          setIconopen(hamburgerMenu);
      }
      else{
          setIconopen(chromeClose);
      }
      
    }
    return(
        <div className="container-fluid">
        <div className="row">

        </div>
             <button className="navbtn" onClick={toggleNav}>
             <Icon icon={iconopen} style={{color: 'white', fontSize: '40px'}} />
             </button>
  
  <div className={open?"navopen":"navclose"}>
   <ul>
   <li>
       <NavLink className="link" to="/">Home</NavLink>
   </li>
   <li>
      <NavLink className="link" to="/users">Users</NavLink>
   </li>
   <li>
       <NavLink className="link" to="/stocks">Company Stocks</NavLink>
   </li>
   <li>
       <NavLink className="link" to="/posts">Posts</NavLink>
   </li>
   <li>
       <NavLink className="link" to="/institutions">Institutions</NavLink>
   </li>
   </ul>
   </div>
        </div>
    )
}