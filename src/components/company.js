import React,{ useEffect, useState} from "react";
import Navbar from "./navbar";
import '../css/company.css';
import { Icon, InlineIcon } from '@iconify/react';
import formNextLink from '@iconify/icons-grommet-icons/form-next-link';
import axios from "axios";
import {Link} from 'react-router-dom';

export default function Company(){
    const [comps,setComps] = useState([]);

    const getComps = ()=>{
        axios.get("https://dummy-wireframe.iecsemanipal.com/stocks",{
            params:{
                apikey:process.env.REACT_APP_API_KEY
            }
        })
        .then((resp)=>{
            setComps(resp.data.data);
            //console.log(resp.data.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

useEffect(()=>{
    getComps();
},[])
    return(
        <div className="container-fluid comp-container">
            <br/>
             <h1>Stocks</h1>
             <Navbar></Navbar>
             <br/>
             <table>
                 <thead>
                 <tr>
                     <th>Name</th><th>Symbol</th><th>Sector</th></tr>
                 </thead>
                 <tbody>
                     {comps.map((comp,key)=>(
                         <tr key={key}>
                             <td>{comp.Name}</td>
                             <td>{comp.Symbol}</td>
                             <td>{comp.Sector}</td>
                             <td>
                                <button className="btn btn-light">
                                    <Link to={`/stocks/${comp._id}`}>
                             <Icon icon={formNextLink} style={{fontSize: '20px'}} /></Link>
                             </button></td>
                         </tr>
                     ))}
               </tbody>
             </table>
        </div>
    )
}