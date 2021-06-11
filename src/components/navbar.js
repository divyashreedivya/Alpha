import React,{useState} from 'react';
import '../css/nav.css';
import {NavLink} from 'react-router-dom';

export default function Navbar(){
    const [open,setOpen] = useState(false);

    const toggleNav =()=>{
      setOpen(!open);
    
    }
    return(
        <div className="container-fluid">
        <div className="row">

        </div>
             <button className="navbtn" onClick={toggleNav}>+</button>
  
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