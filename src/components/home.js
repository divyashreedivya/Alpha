import React,{useState} from 'react';
import '../css/home.css';
import '../css/nav.css';
import Navbar from './navbar';

export default function Home(){

    return(
    <div className="container-fluid homeBody">
{/* <div className="row">   */}
{/* <div className="col-md-2">  */}
<Navbar></Navbar>
{/* </div> */}
 {/* </div> */}
 

        <h1 className="homecon">Welcome</h1>
        <p> Hello</p>
     </div>
    );
}