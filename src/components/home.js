import React,{useState} from 'react';
import '../css/home.css';
import '../css/nav.css';
import Navbar from './navbar';

export default function Home(){

    return(
    <div className="container-fluid homeBody">
<Navbar></Navbar>

 
<div className="homecon">
<svg viewBox="0 0 1350 600">
    <text x="50%" y="50%" fill="transparent" textAnchor="middle">
        Alpha
    </text>
</svg>
<h1>The Beginning...</h1>
        </div> 

     </div>
    );
}